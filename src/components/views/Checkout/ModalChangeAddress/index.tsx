import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import styles from "./ModalChangeAddress.module.scss";
import { Dispatch, SetStateAction } from "react";
import Input from "@/components/ui/Input";

type Proptypes = {
  address: any;
  setChangeAddress: Dispatch<SetStateAction<boolean>>;
  setSelectedAddress: Dispatch<SetStateAction<number>>;
  selectedAddress: number;
};

const ModalChangeAddress = (props: Proptypes) => {
  const { address, setChangeAddress, setSelectedAddress, selectedAddress } =
    props;

  return (
    <Modal onClose={() => setChangeAddress(false)}>
      <h1 className={styles.modal__title}>Change Shipping Address</h1>
      {address.map((item: any, id: number) => (
        <div
          key={item.addressLine}
          className={`${styles.modal__address} ${id === selectedAddress && styles["modal__address--active"]}`}
          onClick={() => {
            setSelectedAddress(id);
            setChangeAddress(false);
          }}
        >
          <h4 className={styles.modal__address__title}>
            Recipient: {item.recipient}
          </h4>
          <p>Phone: {item.phone}</p>
          <p>Address: {item.addressLine}</p>
          <p>Note: {item.note}</p>
        </div>
      ))}
      <Button className={styles.modal__btn} type="button">
        Add new address
      </Button>
      <div>
        <Input
          type="text"
          name="recipient"
          label="Recipient"
          placeholder="Insert Recipient"
        />
        <Input
          type="number"
          name="phone"
          label="Recipient Phone"
          placeholder="Insert Recipient Phone"
        />
      </div>
    </Modal>
  );
};

export default ModalChangeAddress;
