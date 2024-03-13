import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Products } from '../products'

function Sale() {

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
    <main className='SaleContainer'>
        <h1>Sale</h1>
    </main>
  )
}

export default Sale
