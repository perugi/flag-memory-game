import styles from "./GameScore.module.css";

export default function GameScore({ currentScore, highScore }) {
  return (
    <section class={styles.gameScore}>
      <div className={styles.scoreContainer}>Current Score: {currentScore}</div>
      <div className={styles.scoreContainer}>High Score: {highScore}</div>
    </section>
  );
}
