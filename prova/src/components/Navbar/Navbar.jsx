import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>CarroSport</div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
          Home
        </NavLink>
        <NavLink to="/carros" className={({ isActive }) => (isActive ? styles.active : "")}>
          Carros
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? styles.active : "")}>
          Sobre
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? styles.active : "")}>
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
