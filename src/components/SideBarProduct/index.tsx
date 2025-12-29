import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideBarProduct.module.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { productCar } from "../../constants/types";
import { useCartContext } from "../../context/CartContext";

type props = {
    product: productCar;
}

function SideBarProduct({product}: props){

    const {updateQuantity, removeProduct} = useCartContext();

    return(
        <div className={styles.product}>
            <div className={styles.leftSide}>
                <button onClick={()=> removeProduct(product.id)} className={styles.removeBtn}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <div className={styles.details}>
                    <h4>{product.name}</h4>
                    <p>R$ {product.price}</p>
                    <div className={styles.quantityControl}>
                        <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>
                            –
                        </button>

                        <span>{product.quantity}</span>

                        <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                            +
                        </button>
                    </div>
                    <p className={styles.price}>
                        <b>Soma: </b>R$ {product.quantity * product.price} 
                    </p>
                </div>
            </div>

            <div className={styles.rightSide}>
                <img className={styles.img} src={product.image} alt={product.name} />
            </div>

        </div>
    )
}

export default SideBarProduct;
