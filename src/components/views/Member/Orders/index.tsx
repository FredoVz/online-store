import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import styles from "./Orders.module.scss";
import { useEffect, useState } from "react";
import { User } from "@/types/user.type";

type PropTypes = {
  users: User[];
};

const MemberOrdersView = (props: PropTypes) => {
  const { users } = props;
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return (
    <>
      <AdminLayout>
        <div className={styles.users}>
          <h1>Order History</h1>
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
              {usersData.map((user: User, index: number) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className={styles.users__table__action}>
                      {/* <Button
                        type="button"
                        onClick={() => {
                          setUpdatedUser(user);
                        }}
                        className={styles.users__table__action__edit}
                      >
                        <i className="bx bx-edit" />
                      </Button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
};

export default MemberOrdersView;
