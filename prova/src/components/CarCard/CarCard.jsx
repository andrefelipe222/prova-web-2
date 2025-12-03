import styles from "./CarCard.module.css";

function CarCard({ id, name, year, engine, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={name} className={styles.thumb} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>Ano: {year} · Motor: {engine}</p>
        {/* Botão removido */}
      </div>
    </article>
  );
}

export default CarCard;
