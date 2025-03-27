import styles from "./Background.module.css";
import backgroundImage from "../../assets/background.png";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      <img
        className={`${styles.scrollingMap} ${styles.map1}`}
        src={backgroundImage}
        alt=""
      ></img>
      <img
        className={`${styles.scrollingMap} ${styles.map2}`}
        src={backgroundImage}
        alt=""
      ></img>
      <img
        className={`${styles.scrollingMap} ${styles.map3}`}
        src={backgroundImage}
        alt=""
      ></img>
    </div>
  );
}
