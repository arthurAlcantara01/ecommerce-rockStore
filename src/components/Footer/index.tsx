import styles from "./footer.module.css";
import appStore from "../../img/app-store.png";
import playStore from "../../img/play-store.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Footer(){
    return (
        <Router>
            <footer className={styles.footer}>
                <div className={styles.innerContent}>
                    <div className={styles.downloadOptions}>
                        <p>Baixe a nossa aplicação</p>
                        <p>Baixe a nossa aplicação para Android ou IOS</p>
                        <div className={styles.imgs}>
                            <img className={styles.img} src={appStore} alt="App Store" />
                            <img className={styles.img} src={playStore} alt="Play Store" />
                        </div>
                    </div>


                    <div className={styles.logoFooter}>
                        <h1 className={styles.logo}>
                            ROCK
                            <span className={styles.logoSpan}>STORE</span>
                        </h1>
                        <p className={styles.textFooter}>
                            Meu objetivo é me tornar um ótimo desenvolvedor web e evoluir em outras áreas também
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h3 className={styles.titleLinks}>Links úteis</h3>
                        <ul className={styles.list}>
                                <li>
                                    <Link className={styles.item} to="/">Cupons</Link>
                                </li>
                                <li>
                                    <Link className={styles.item} to="/">Blog posts</Link>
                                </li>
                                <li>
                                    <Link className={styles.item} to="/">Políticas</Link>
                                </li>
                                <li>
                                    <Link className={styles.item} to="/">Torne-se afiliado</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyContent}> 
                    <hr />
                    <p className={styles.copy}>Copyright 2030 - Arthur Alcântara - Todos Direitos Reservados</p>
                </div>
            </footer>
        </Router>
    )
}

export default Footer