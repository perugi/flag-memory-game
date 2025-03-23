import styles from "./App.module.css";

import Header from "./components/Header/Header";
import GameScore from "./components/GameScore/GameScore";
import PlayArea from "./components/PlayArea/PlayArea";
import Footer from "./components/Footer/Footer";

function App() {
  const roundNumber = 1;
  const currentScore = 3;
  const highScore = 5;
  const countriesInPlay = ["US", "CA", "ME", "BR", "AR"];

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <GameScore
          highScore={highScore}
          currentScore={currentScore}
          roundNumber={roundNumber}
        />
        <PlayArea countriesInPlay={countriesInPlay} />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
