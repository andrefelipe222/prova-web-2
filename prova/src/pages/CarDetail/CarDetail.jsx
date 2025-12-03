import { useParams, Link } from "react-router-dom";
import { cars } from "../../data/cars";
import styles from "./CarDetail.module.css";

function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id, 10));

  if (!car) {
    return <p>Carro não encontrado</p>;
  }

  return (
    <section className={styles.wrapper}>
      <img src={car.image} alt={car.name} className={styles.banner} />
      <div className={styles.content}>
        <h2>{car.name}</h2>
        <Link to="/carros" className={styles.back}>Voltar</Link>
      </div>
    </section>
  );
}

export default CarDetail;



