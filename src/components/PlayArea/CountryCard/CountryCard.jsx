import styles from "./CountryCard.module.css";

export default function CountryCard({ countryCode }) {
  return (
    <div className={styles.CountryCard}>
      <button>
        <img
          className={styles.flag}
          src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
          alt={`Flag of ${countryCode}`}
        />
      </button>
    </div>
  );
}
