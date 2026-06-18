import styles from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.cardSkeleton__image} />
      <div className={styles.cardSkeleton__title}></div>
      <div className={styles.cardSkeleton__category}></div>
      <div className={styles.cardSkeleton__price}></div>
    </div>
  );
};

export default CardSkeleton;
