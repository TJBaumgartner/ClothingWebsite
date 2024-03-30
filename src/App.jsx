import { useEffect, useState } from 'react'
import {Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Collections from './components/Collections';
import ProductDetail from './components/ProductDetail'
import Sale from './components/Sale';
import NewArrivals from './components/NewArrivals';
import Cart from './components/Cart';
function App() {
  const [displayCart, setDisplayCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const showCart = () => setDisplayCart(!displayCart)
  return (
    <div className='AppContainer'>
      { displayCart ? <Cart showCart={showCart} cartItems={cartItems}/> : null }
      <Navbar showCart={showCart}/>
      <div>
        <div className='adBanner'>
          <div className='adBannerContent'>
            <h1>New Arrivals Every Monday | Get Free Shipping On Orders Over $99</h1>
            <Link to="collections/mens">
                <h2>SHOP MEN'S</h2>
            </Link>
            <Link to="collections/womens">
                <h2>SHOP WOMEN'S</h2>
            </Link>
          </div>
        </div>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/collections/sale" element={<Sale/>}/>
            <Route path="/collections/newArrivals" element={<NewArrivals/>}/>
            <Route path="/collections/:sex" element={<Collections/>}/>
            <Route path="/collections/:sex/:category" element={<Collections/>}/>
            <Route path="/collections/:sex/:category/:id" element={<ProductDetail setCartItems={setCartItems} setDisplayCart={setDisplayCart} cartItems={cartItems}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Homepage/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
