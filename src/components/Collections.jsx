import {useEffect, useState } from 'react'
import '../App.css'
import { Products } from '../products'
function Collections() {
    const [products, setProducts] = useState()


  useEffect(() => {
    setProducts(Products)
  }, [])

    return (
    <main className='collectionsContainer'>
        <h1>Mens</h1>
          {products &&
            products.map((product) => {
              return product.category == 'pants' ?
              <h1>hi</h1>
              : null
            })
          }
    </main>
  )
}

export default Collections
