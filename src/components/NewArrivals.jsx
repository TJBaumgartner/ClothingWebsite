import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'
import { Products } from '../products'

function NewArrivals() {
    return (
    <main className='saleContainer'>
        <div className='saleBackground'>
          <h1>Vanilla Cosmetics</h1>
          <h2>New Arrivals</h2>
          <div className='saleButtonContainer'>
            <Link to="/collections/mens/arrivals">
                <h3>Men's</h3>
            </Link>
            <Link to="/collections/womens/arrivals">
                <h3>Women's</h3>
            </Link>              
          </div>
        </div>
    </main>
  )
}

export default NewArrivals
