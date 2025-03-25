import { useState } from "react";
import styles from "./PlayArea.module.css";
import CountryCard from "./CountryCard/CountryCard";
import { useEffect } from "react";

export default function PlayArea({
  countriesInPlay,
  handleCountryClick,
  gameIsOver,
  gameScore,
}) {
  const [displayedCountries, setDisplayedCountries] = useState(countriesInPlay);

  function shuffleCountries(countries) {
    const shuffled = [...countries].sort(() => Math.random() - 0.5);

    return shuffled;
  }

  useEffect(() => {
    if (!gameIsOver) {
      setDisplayedCountries(shuffleCountries(countriesInPlay));
    }
  }, [gameScore, countriesInPlay, gameIsOver]);

  return (
    <section className={styles.playArea}>
      {Array.from(displayedCountries).map((country) => (
        <CountryCard
          key={country.iso}
          country={country}
          handleCountryClick={handleCountryClick}
        />
      ))}
    </section>
  );
}
