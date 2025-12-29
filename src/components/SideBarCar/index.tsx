import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideBarCar.module.css";
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import SideBarProduct from "../SideBarProduct";
import { Link} from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

type props = {
    show: boolean;
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBarCar({show, setShowSideBar}: props){
    
    const {cart, total, totalItens} = useCartContext()

    return (
            <aside className={`${styles.innerContent} ${show && styles.show}`}>
                <div className={styles.top}>
                    <h3>Seu carrinho</h3>
                    <button onClick={()=> setShowSideBar(false)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </div>

                <div className={styles.productList}>
                    {cart.map((product) => (<SideBarProduct key={product.id} product={product}/>))}
                </div>

                <div className={styles.total}>
                    <p><b>Total: </b>R$ {total}</p>
                </div>

                <Link to="/cart/checkout" className={styles.btnIcon}>
                    <span>Pagar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill}/>
                </Link>

                {totalItens == 0 ? <i>Seu carrinho está vazio</i> : <i>Seu carrinho tem {totalItens} {totalItens == 1 ? "item" : "itens"}</i>}
                
            </aside>
    )
}

export default SideBarCar