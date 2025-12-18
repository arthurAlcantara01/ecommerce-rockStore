import { Link} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import headerImg from "../../img/header-image.png"

function Header(){
    return (
        <Router>
            <header>
                <div className={styles.innerContent}>
                    <div className={styles.leftSide}>
                        <h2 className={styles.lsT}>Dê Um Novo Estilo ao Seu Trabalho!</h2>
                        <p className={styles.lsP}>Sucesso nem sempre tem haver com grandeza. Tem haver com consistência. Trabalho duro consistência supera o sucesso.A grandeza virá.</p>
                        <Link className={styles.lsL} to="/produts">
                            <span>Ver Agora</span>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </Link>
                    </div>
                    <div className={styles.rightSide}>
                        <img className={styles.rsImg} src={headerImg} alt="Produts" />
                    </div>
                </div>
            </header>
        </Router>
    )
}

export default Header;