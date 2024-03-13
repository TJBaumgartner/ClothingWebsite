import '../App.css'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../products'
import Sidenav from './Sidenav'

function Collections() {

  const [products, setProducts] = useState()
  const [sortDown, setSortDown] = useState(true)
  const sex = useParams().sex
  const category = useParams().category

  const changeSort = () => {
    setSortDown(!sortDown)
  }

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
  <>
    <nav className='navBanner'>
      <h1>hi</h1>
    </nav>
    <main className='collectionsContainer'>
      <Sidenav sex={sex}/>
      <div className='collectionsContent'>
      {category == null && products && true &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex &&
            <div key={product.id} className='productCard'>
              <img src={product.image}></img>
              <div>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
              </div>
            </div>
          })
        }
        {category == 'arrivals' && products && true &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.newArrival == true &&
            <div key={product.id} className='productCard'>
              <img src={product.image}></img>
              <div>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
              </div>
            </div>
          })
        }
        {category == 'sale' &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.onSale == true &&
            <div key={product.id} className='productCard'>
              <img src={product.image}></img>
              <div>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
              </div>
            </div>
          })
        }
        {products && category !== 'arrivals' && category !== 'sale' &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.category == category &&
            <div key={product.id} className='productCard'>
              <img src={product.image}></img>
              <div>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
              </div>
            </div>
          })
        }
      </div>
    </main>
  </>
  )
}

export default Collections
