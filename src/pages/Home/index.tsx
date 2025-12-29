import ExcSection from '../../components/ExcSection'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import TestimonialsList from '../../components/testimonialsList'
import type { productTp } from '../../constants/types'
import styles from './home.module.css'

type props = {
    products: productTp[];
}

function Home({products}: props){
    
    return(
        <main>
        <Header/>
        <div className={styles.innerContent}>
            <div className={styles.sectionTitle}>
                <h3 className={styles.title}>Produtos selecionados</h3>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.mainContent}>
                <ProductList products={products}/>
            </div>
        </div>  
        <ExcSection/>
        <TestimonialsList/>
      </main>
    )
}

export default Home