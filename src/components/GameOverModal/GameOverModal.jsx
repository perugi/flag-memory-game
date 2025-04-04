import { useRef, useEffect } from "react";
import styles from "./GameOverModal.module.css";

export default function GameOverModal({
  gameIsOver,
  gameScore,
  highScore,
  resetGame,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (gameIsOver) {
      dialogRef.current.showModal();
      // Add a small delay to prevent the click that opened the modal from closing it
      setTimeout(() => {
        window.addEventListener("click", resetGame);
        window.addEventListener("keydown", resetGame);
      }, 0);
    } else {
      dialogRef.current.close();
      window.removeEventListener("click", resetGame);
      window.removeEventListener("keydown", resetGame);
    }

    return () => {
      window.removeEventListener("click", resetGame);
      window.removeEventListener("keydown", resetGame);
    };
  }, [gameIsOver, resetGame]);

  return (
    <dialog ref={dialogRef} className={styles.gameOverModal}>
      <div className={styles.modalContainer}>
        <h2>Game Over!</h2>
        <p>Final score: {gameScore}</p>
        <p>High score: {highScore}</p>
        <p>Click anywhere to play again...</p>
      </div>
    </dialog>
  );
}
