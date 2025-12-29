import styles from "./products.module.css"
import ProductList from "../../components/ProductList";
import type { productTp } from "../../constants/types";

type props = {
    products: productTp[];
}

function Products({products} :props){
    return (
        <div className={styles.innerContent}>
            <div className={styles.sectionTitle}>
                <h3 className={styles.title}>Produtos selecionados</h3>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.prodContent}>
                <ProductList products={products}/>
            </div>
        </div>  
    )
}

export default Products