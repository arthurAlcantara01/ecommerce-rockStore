import type { productTp } from "../../constants/types";
import styles from "./productList.module.css";
import Product from "../Product";

type props = {
    products: productTp[]
}

function ProductList({products}: props){
    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList