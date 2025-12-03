import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.section}>
      <h2>Contato</h2>
      <p>Preencha o formulário para falar conosco.</p>

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Seu email" />
        </div>

        <div className={styles.row}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem"></textarea>
        </div>

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </section>
  );
}

export default Contact;

