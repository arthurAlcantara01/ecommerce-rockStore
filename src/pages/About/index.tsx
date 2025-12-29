import styles from "./about.module.css";

function About() {
  return (
    <main className={styles.container}>
        <div className={styles.sectionTitle}>
            <h3 className={styles.title}>Sobre o projeto</h3>
            <div className={styles.underline}></div>
        </div>


        <section className={styles.section}>
            <h2>O que é</h2>

            <p>
            Este projeto é uma aplicação de e-commerce fictícia desenvolvida com
            React e TypeScript. Ele simula um carrinho de compras real, com
            controle de quantidade, persistência de dados e fluxo de checkout.
            </p>
        </section>

        <section className={styles.section}>
            <h2>Tecnologias Utilizadas</h2>
            <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Context API</li>
            <li>CSS Modules</li>
            <li>LocalStorage</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>Funcionalidades</h2>
            <ul>
            <li>Adicionar e remover produtos do carrinho</li>
            <li>Controle de quantidade</li>
            <li>Cálculo automático do total</li>
            <li>Carrinho persistente</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>Objetivo</h2>
            <p>
            O objetivo deste projeto é aplicar boas práticas de arquitetura
            front-end, organização de estado e componentização, simulando
            um cenário próximo ao de uma aplicação real de produção.
            </p>
        </section>
    </main>
  );
}

export default About;
