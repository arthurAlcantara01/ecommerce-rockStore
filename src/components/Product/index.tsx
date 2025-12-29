import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { productTp } from "../../constants/types";
import styles from "./product.module.css";
import { Link} from "react-router-dom";
import { faCartShopping, faMoneyBill, faStar as faStarEnchida } from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarBorda} from "@fortawesome/free-regular-svg-icons"
import {useCartContext } from "../../context/CartContext";


type props ={
    product: productTp;
}

function product({product}: props){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {addProduct} = useCartContext();

    const {id, name, image, rating, price} = product;

    return (
        <div className={styles.product}>
            <img src={image} alt={name} className={styles.img}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.rating}>{ 
                [...Array(rating)].map((_, i) =>(
                    <FontAwesomeIcon key={i} icon={faStarEnchida}/>
                ))
                }
                { 
                [...Array(5-rating)].map((_, i) =>(
                    <FontAwesomeIcon key={i} icon={faStarBorda}/>
                ))
                }
                </p>
            <p className={styles.price}><span className={styles.typeM}>R$</span> {price}</p>

            <div className={styles.buttons}>
                <Link to={`/products/${id}/checkout`} className={styles.btnIcon}>
                    <span>Comprar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill}/>
                </Link>
                <button onClick={()=> addProduct(product)} className={`${styles.addToCar} ${styles.btnIcon}`}>
                    <span>Adicionar ao carinho</span>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
    )
}

export default product