import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import { useState } from "react";
import Logo from "../Logo";
import { useCartContext } from "../../context/CartContext";

type props = {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBar({setShowSideBar}: props){

    const [show, setShow] = useState(false);

    const {totalItens} = useCartContext()

    return(
            <div className={styles.content}>
                <div className={styles.innerContent}>
                    <Logo/>
                    <nav className={`${show && styles.show}`}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <Link className={styles.a} to="/">Home</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.a} to="/products">Products</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.a} to="/about">About</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.a}  to="/contact">Contact</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.a} to="/account">Account</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.navSPCM}>
                        <div className={styles.searchInputContainer}> 
                            <input className={styles.input} type="search" placeholder="Procurar"/>
                            <FontAwesomeIcon className={styles.iconS} icon={faSearch}/>
                        </div>
                        <button onClick={()=> setShowSideBar(true)} className={styles.littleCar}>
                            <FontAwesomeIcon className={styles.icon} icon={faShoppingCart}/>
                            <div className={styles.productsCount}>{totalItens}</div>
                        </button>
                        <button onClick={()=> setShow(!show)} className={styles.buttonMenu}>
                            <FontAwesomeIcon className={styles.icon} icon={faBars}/>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default NavBar;