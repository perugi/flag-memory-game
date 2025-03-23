import styles from "./CountryCard.module.css";

export default function CountryCard({ country, handleCountryClick }) {
  return (
    <div className={styles.CountryCard}>
      <button onClick={() => handleCountryClick(country.iso)}>
        <img
          className={styles.flag}
          src={`https://flagcdn.com/${country.iso.toLowerCase()}.svg`}
          alt={`Flag of ${country.name}`}
        />
      </button>
    </div>
  );
}
