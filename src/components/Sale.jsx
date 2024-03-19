import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'
import { Products } from '../products'

function Sale() {
    return (
    <main className='saleContainer'>
        <div className='saleBackground'>
          <h1>Vanilla Cosmetics</h1>
          <div className='buttonContainer'>
            <Link to="/collections/mens/sale">
                <h2>Men's</h2>
            </Link>
            <Link to="/collections/womens/sale">
                <h2>Women's</h2>
            </Link>              
          </div>
        </div>
    </main>
  )
}

export default Sale
