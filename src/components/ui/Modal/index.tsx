import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: any }) => {
  //const ref: any = useRef();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside); //click
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); //click
    };
  }, [onClose]);
  return (
    <div className={styles.modal}>
      <div className={styles.modal__main} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
