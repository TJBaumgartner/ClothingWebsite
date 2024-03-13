import '../App.css'
import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Products } from '../products'
import Sidenav from './Sidenav'
import ProductCard from './ProductCard'

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
      <div>
        {sex !== null &&
          <Link to={`/collections/${sex}`}>
            <div>
              <h2>{sex}</h2>
            </div>
          </Link>
        }
        {category &&
                <h2><span>&gt;</span>{category}</h2>            
        }
      </div>

    </nav>
    <main className='collectionsContainer'>
      <Sidenav sex={sex}/>
      <div className='collectionsContent'>
      {category == null && products && true &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
        {category == 'arrivals' && products && true &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.newArrival == true &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
        {category == 'sale' &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.onSale == true &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
        {products && category !== 'arrivals' && category !== 'sale' &&
          products.sort((a, b) =>  b.price - a.price).map((product) => {
            return product.gender == sex && product.category == category &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
      </div>
    </main>
  </>
  )
}

export default Collections
