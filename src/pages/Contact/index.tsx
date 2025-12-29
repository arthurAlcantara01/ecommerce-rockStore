import { useState } from "react";
import styles from "./contact.module.css";

function Contact() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const value = {
            nome,
            email,
            mensagem
        }
        alert(`Mensagem enviada com sucesso! ${value.nome} ${value.email} ${value.mensagem}`);
    };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Fale Conosco</h1>

      <p className={styles.subtitle}>
        Tem alguma dúvida, sugestão ou problema?
        Preencha o formulário abaixo e entraremos em contato.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Nome</label>
          <input type="text" required value={nome} onChange={(e)=> setNome(e.target.value)} />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className={styles.field}>
          <label>Mensagem</label>
          <textarea rows={5} required value={mensagem} onChange={(e)=> setMensagem(e.target.value)}/>
        </div>

        <button type="submit" className={styles.button}>
          Enviar mensagem
        </button>
      </form>
    </main>
  );
}

export default Contact;
