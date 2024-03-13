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

function App() {
  return (
    <div className='AppContainer'>
      <Navbar/>
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
            <Route path="/collections/:sex" element={<Collections/>}/>
            <Route path="/collections/:sex/:category" element={<Collections/>}/>
            <Route path="/collections/:sex/:category/:id" element={<ProductDetail/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Homepage/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
