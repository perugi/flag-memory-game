import styles from "./PlayArea.module.css";
import CountryCard from "./CountryCard/CountryCard";

export default function PlayArea({ countriesInPlay }) {
  function shuffleCountries(countries) {
    const shuffled = [...countries].sort(() => Math.random() - 0.5);

    return shuffled;
  }

  const displayedCountries = shuffleCountries(countriesInPlay);

  return (
    <section className={styles.playArea}>
      {Array.from(displayedCountries).map((countryCode) => (
        <CountryCard key={countryCode} countryCode={countryCode} />
      ))}
    </section>
  );
}
