import styles from "./Footer.module.css";

function Footer({ year }) {
  return (
    <footer className={styles.footer}>
      <p>© {year} CarrosTop · Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
