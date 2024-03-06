import { useState } from 'react'
import {Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Sale from './components/Sale';
function App() {

  return (
    <div className='AppContainer'>
      <div className='AppContent'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/womens" element={<Womens/>}/>
          <Route path="/mens" element={<Mens/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="*" element={<Homepage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
