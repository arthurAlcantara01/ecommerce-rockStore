import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes} from 'react-router-dom'
import Products from './pages/Products'
import SideBarCar from './components/SideBarCar'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'

function App() {

  const [products, setProducts] = useState([])
  const [showSideBAr, setShowSideBAr] = useState(false);

  useEffect(()=>{
    fetch("/db.json").then(res => res.json()).then(data => setProducts(data.products));
  },[])


  return (
    <>
        <NavBar setShowSideBar={setShowSideBAr}/>
        <SideBarCar setShowSideBar={setShowSideBAr} show={showSideBAr}/>
          <main>
            <Routes>
              <Route path='/' element={<Home products={products} />} />
              <Route path='/products' element={<Products products={products}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/account' element={<Account/>}/>
            </Routes>
          </main>
        <Footer/>
    </>
  )
}

export default App
