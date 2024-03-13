import '../App.css'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../products'
import Sidenav from './Sidenav'

function Collections() {

  const [products, setProducts] = useState()
  const sex = useParams().sex
  
  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
  <main className='collectionsContainer'>
    <Sidenav sex={sex}/>
    <div className='collectionsContent'>
      {products &&
        products.map((product) => {
          return  product.gender == sex ?
          <div key={product.id} className='productCard'>
            <img src={product.image}></img>
            <div>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          </div>
          : null
        })
      }
    </div>
  </main>
  )
}

export default Collections
