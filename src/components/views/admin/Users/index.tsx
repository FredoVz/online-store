import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import styles from "./Users.module.scss";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

type PropTypes = {
  users: any;
};

const UsersAdminView = (props: PropTypes) => {
  const [modalUpdateUser, setModalUpdateUser] = useState<any>({});
  const { users } = props;
  return (
    <>
      <AdminLayout>
        <div className={styles.users}>
          <h1>User Management</h1>
          <table className={styles.users__table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any, index: number) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className={styles.users__table__action}>
                      <Button
                        type="button"
                        onClick={() => {
                          console.log(user);
                          setModalUpdateUser(user);
                        }}
                      >
                        Update
                      </Button>
                      <Button type="button">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {/* {modalUpdateUser && ( */}
      {Object.keys(modalUpdateUser).length && (
        <>
          {console.log("Modal rendered")}
          <Modal onClose={() => setModalUpdateUser({})}>
            <h1>Update User</h1>
            <p>{modalUpdateUser.email}</p>
          </Modal>
        </>
      )}
    </>
  );
};

export default UsersAdminView;
