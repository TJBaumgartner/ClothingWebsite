import {useEffect, useState } from 'react'
import '../App.css'
import { Products } from '../products'
function Collections(props) {
    const [products, setProducts] = useState()
    const category = props.category
  useEffect(() => {
    setProducts(Products)
  }, [])

    return (
    <main className='collectionsContainer'>
        <h1>Mens</h1>
          {products &&
            products.map((product) => {
              return product.category == category || product.gender == category ?
              <div key={product.id}>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
              </div>
              : null
            })
          }
    </main>
  )
}

export default Collections
