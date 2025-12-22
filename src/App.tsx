import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ExcSection from './components/ExcSection'
import TestimonialsList from './components/testimonialsList'
import Footer from './components/Footer'

function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch("/db.json").then(res => res.json()).then(data => setProducts(data.products));
  },[])

  return (
    <>
      <NavBar/>
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
      <Footer/>
    </>
  )
}

export default App
