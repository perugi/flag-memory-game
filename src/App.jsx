import { useState, useEffect } from "react";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import GameScore from "./components/GameScore/GameScore";
import PlayArea from "./components/PlayArea/PlayArea";
import Footer from "./components/Footer/Footer";
import GameOverModal from "./components/GameOverModal/GameOverModal";
import countryData from "./data/countries.json";

const MIN_COUNTRIES = 4;
const MAX_COUNTRIES = 10;

function getRandomCountries(countryList, num) {
  const shuffledCountries = countryList.toSorted(() => Math.random() - 0.5);
  return shuffledCountries.slice(0, num);
}

function App() {
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [gameScore, setGameScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [countries, setCountries] = useState(countryData.countries);
  const [countriesInPlay, setCountriesInPlay] = useState([
    ...getRandomCountries(countryData.countries, MIN_COUNTRIES),
  ]);
  const [clickedCountries, setClickedCountries] = useState([]);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  function goToNextRound() {
    setRoundNumber((prev) => prev + 1);
    const numberOfCountries = Math.min(
      MAX_COUNTRIES,
      MIN_COUNTRIES + roundNumber * 2
    );

    setCountriesInPlay([...getRandomCountries(countries, numberOfCountries)]);
    setClickedCountries([]);
  }

  function resetGame() {
    setGameIsOver(false);
    setRoundNumber(1);
    setCountries(countryData.countries);
    setCountriesInPlay([
      ...getRandomCountries(countryData.countries, MIN_COUNTRIES),
    ]);
    setClickedCountries([]);
    setGameScore(0);
  }

  function updateHighScore(currentScore) {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("highScore", currentScore);
    }
  }

  function handleCountryClick(countryCode) {
    if (clickedCountries.includes(countryCode)) {
      setGameIsOver(true);
      return;
    }

    setClickedCountries((prev) => [...prev, countryCode]);
    setCountries((prev) =>
      prev.filter((country) => country.iso !== countryCode)
    );
    setGameScore((prev) => prev + 1);
    updateHighScore(gameScore + 1);

    if (clickedCountries.length + 1 === countriesInPlay.length) {
      goToNextRound();
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <GameScore
          highScore={highScore}
          currentScore={gameScore}
          roundNumber={roundNumber}
        />
        <PlayArea
          countriesInPlay={countriesInPlay}
          handleCountryClick={handleCountryClick}
          gameScore={gameScore}
          gameIsOver={gameIsOver}
        />
      </main>
      <Footer className={styles.footer} />
      <GameOverModal
        gameIsOver={gameIsOver}
        gameScore={gameScore}
        highScore={highScore}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
