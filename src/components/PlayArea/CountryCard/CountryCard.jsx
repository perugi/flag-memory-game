import styles from "./CountryCard.module.css";

export default function CountryCard({ country, handleCountryClick }) {
  return (
    <button
      className={styles.countryCard}
      onClick={() => handleCountryClick(country.iso)}
    >
      <div className={styles.flagContainer}>
        <img
          className={styles.flag}
          src={`https://flagcdn.com/${country.iso.toLowerCase()}.svg`}
          alt={`Flag of ${country.name}`}
        />
      </div>
      <h2>{country.name}</h2>
    </button>
  );
}
