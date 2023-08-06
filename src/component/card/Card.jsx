import styles from "./Card.module.css";

const Card = ({ cardData, title }) => {
  if (!cardData) return null;

  if (!cardData.executionDetails) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
      </div>
    );
  }
  
  const keys = Object.keys(cardData.executionDetails)
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>

      <div className={styles.cell}>
        <div className={styles.value}>{keys[0]}</div>
        <div className={styles.value}>{cardData.executionDetails[keys[0]]}</div>
      </div>

      <div className={styles.cell}>
        <div className={styles.value}>{keys[1]}</div>
        <div className={styles.value}>{cardData.executionDetails[keys[1]]}</div>
      </div>

      <div className={styles.cell}>
        <div className={styles.value}>{keys[2]}</div>
        <div className={styles.value}>{cardData.executionDetails[keys[2]]}</div>
      </div>
    </div>
  );
};

export default Card;
