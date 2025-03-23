import styles from "./PlayArea.module.css";
import CountryCard from "./CountryCard/CountryCard";

export default function PlayArea({ countriesInPlay, handleCountryClick }) {
  function shuffleCountries(countries) {
    const shuffled = [...countries].sort(() => Math.random() - 0.5);

    return shuffled;
  }

  const displayedCountries = shuffleCountries(countriesInPlay);

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
