import { Link, BrowserRouter as Router } from "react-router-dom"
import styles from "./excSection.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import exclusiva from "../../img/exclusive.png";

function ExcSection(){
    return (
        <Router>            
            <div className={styles.exclusiveSection}>
                <div className={styles.innerContent}>
                        <div className={styles.leftSide}>
                            <img className={styles.img} src={exclusiva} alt="" />
                        </div>
                        <div className={styles.rightSide}>
                            <h2 className={styles.EsTitle}>Smart Band 4</h2>
                            <p>
                                O Mi Smart Band 4 tem uma tela AMOLED 39.9% maior que o Mi Band 3, tela
                                completamente digital com brilho ajustável, de tal modo que tudo é claro ao máximo
                            </p>
                            <Link className={styles.seeMore} to="/produts">
                                    <span>Ver Agora</span>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                            </Link>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default ExcSection