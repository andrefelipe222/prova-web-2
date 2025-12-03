import { cars } from "../../data/cars";
import CarCard from "../../components/CarCard/CarCard";
import styles from "./Cars.module.css";

function Cars() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Modelos disponíveis</h2>
      <div className={styles.grid}>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            year={car.year}
            engine={car.engine}
            image={car.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Cars;
