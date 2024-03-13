import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import NavBanner from './NavBanner';

function ProductDetail() {
    const location = useLocation();
    const product = location.state.prdocut;
    return (
    <>
        <NavBanner/>
        <main className='productDetailContainer'>
            
        </main>
    </>
  )
}

export default ProductDetail
