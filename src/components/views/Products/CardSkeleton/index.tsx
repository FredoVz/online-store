import styles from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={`skeleton-${i}`} className={styles.cardSkeleton}>
          <div className={styles.cardSkeleton__image} />
          <div className={styles.cardSkeleton__title}></div>
          <div className={styles.cardSkeleton__category}></div>
          <div className={styles.cardSkeleton__price}></div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
