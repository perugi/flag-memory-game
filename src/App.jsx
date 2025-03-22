import styles from "./App.module.css";

import Header from "./components/Header/Header";
import GameScore from "./components/GameScore/GameScore";
import PlayArea from "./components/PlayArea/PlayArea";
import Footer from "./components/Footer/Footer";

function App() {
  const highScore = 5;
  const currentScore = 3;

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <GameScore highScore={highScore} currentScore={currentScore} />
        <PlayArea />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
