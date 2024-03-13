import '../App.css'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../products'
import Sidenav from './Sidenav'

function Collections() {

  const [products, setProducts] = useState()
  const sex = useParams().sex
  const category = useParams().category

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
  <main className='collectionsContainer'>
    <Sidenav sex={sex}/>
    <div className='collectionsContent'>
      {category == 'arrivals' && products &&
      console.log(products.sort((a, b) => a.price - b.price))
        // products.sort((a, b) => a.price > b.price ? 1 : -1).map((product) => {
        //   return product.gender == sex && product.newArrival == true &&
        //   <div key={product.id} className='productCard'>
        //     <img src={product.image}></img>
        //     <div>
        //       <h1>{product.name}</h1>
        //       <h2>{product.price}</h2>
        //     </div>
        //   </div>
        // })
      }
      {category == 'sale' &&
        products.map((product) => {
          return product.gender == sex && product.onSale == true &&
          <div key={product.id} className='productCard'>
            <img src={product.image}></img>
            <div>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          </div>
        })
      }
      {products && category &&
        products.map((product) => {
          return product.gender == sex && product.category == category &&
          <div key={product.id} className='productCard'>
            <img src={product.image}></img>
            <div>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          </div>
        })
      }
    </div>
  </main>
  )
}

export default Collections
