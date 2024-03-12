import { useState } from 'react'
import {Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Sale from './components/Sale';
import About from './components/About';
import Footer
 from './components/Footer';
function App() {

  return (
    <div className='AppContainer'>
      <Navbar/>
      <div className='AppContent'>
        <div className='adBanner'>
          <div className='adBannerContent'>
            <h1>New Arrivals Every Monday | Get Free Shipping On Orders Over $99</h1>
            <Link to="/mens">
                <h2>SHOP MEN'S</h2>
            </Link>
            <Link to="/womens">
                <h2>SHOP WOMEN'S</h2>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/womens" element={<Womens/>}/>
          <Route path="/mens" element={<Mens/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Homepage/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
