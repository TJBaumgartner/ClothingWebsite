import '../App.css'
import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Products } from '../products'
import Sidenav from './Sidenav'
import ProductCard from './ProductCard'
import NavBanner from './NavBanner'

function Collections() {

  const [products, setProducts] = useState()
  const [filter, setFilter] = useState(true)
  const [mobileFilter, setMobileFilter] = useState(true)

  const sex = useParams().sex
  // const category = useParams().category
  const [category, setCategory] = useState(useParams().category)
  useEffect(() => {
    setProducts(Products)
  },[])
  return (
  <>
    <NavBanner setCategory={setCategory}/>
      <div className='filterContainer'>
        <select onChange={() => setFilter(!filter)}>
          <option>Sort</option>
          <option value={"Price : High to Low"}>Price : High to Low</option>
          <option value={"Price : Low to High"}>Price : Low to High</option>
        </select>
        <select onChange={(e) => setCategory(e.target.value)} className='mobileFilter'>
          <option>Category</option>
          <option value="arrivals">New Arrivals</option>
          <option value="sweaters">Sweaters</option>
          <option value="shirts">Shirts</option>
          <option value="bottoms">Bottoms</option>
          <option value="shoes">Shoes</option>
          <option value="sale">Sale</option>
        </select>
      </div>
    <main className='collectionsContainer'>
      <Sidenav sex={sex} setCategory={setCategory}/>
        {filter == true ?
        <div className='collectionsContent'>
          {category == null && products &&
              products.sort((a, b) =>  b.price - a.price).map((product) => {
                return product.gender == sex &&
                <ProductCard product={product} key={product.id}></ProductCard>
              })
          }
          {category == 'arrivals' && products &&
            products.sort((a, b) =>  b.price - a.price).map((product) => {
              return product.gender == sex && product.newArrival == true &&
              <ProductCard product={product} key={product.id}></ProductCard>
            })
          }
          {category == 'sale' && products &&
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
        :
        <div className='collectionsContent'>
        {category == null && products &&
            products.sort((a, b) =>  a.price - b.price).map((product) => {
              return product.gender == sex &&
              <ProductCard product={product} key={product.id}></ProductCard>
            })
        }
        {category == 'arrivals' && products &&
          products.sort((a, b) =>  a.price - b.price).map((product) => {
            return product.gender == sex && product.newArrival == true &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
        {category == 'sale' && products &&
          products.sort((a, b) =>  a.price - b.price).map((product) => {
            return product.gender == sex && product.onSale == true &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
        {products && category !== 'arrivals' && category !== 'sale' &&
          products.sort((a, b) =>  a.price - b.price).map((product) => {
            return product.gender == sex && product.category == category &&
            <ProductCard product={product} key={product.id}></ProductCard>
          })
        }
      </div>
        }
    </main>
  </>
  )
}

export default Collections
