import styles from "./PlayArea.module.css";
import CountryCard from "./CountryCard/CountryCard";

export default function PlayArea({ countriesInPlay, handleCountryClick }) {
  return (
    <section className={styles.playArea}>
      {Array.from(countriesInPlay).map((country) => (
        <CountryCard
          key={country.iso}
          country={country}
          handleCountryClick={handleCountryClick}
        />
      ))}
    </section>
  );
}
