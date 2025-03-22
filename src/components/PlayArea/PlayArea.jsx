import styles from "./PlayArea.module.css";

import CountryCard from "./CountryCard/CountryCard";

export default function PlayArea() {
  const countriesInPlay = new Set([
    "US",
    "CA",
    "JP",
    "BR",
    "AU",
    "GB",
    "DE",
    "FR",
    "IT",
    "CN",
  ]);
  // TODO Do no use index as key
  return (
    <section className={styles.playArea}>
      {Array.from(countriesInPlay).map((countryCode, index) => (
        <CountryCard key={index} countryCode={countryCode} />
      ))}
    </section>
  );
}
