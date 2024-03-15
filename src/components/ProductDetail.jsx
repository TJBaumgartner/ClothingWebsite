import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import NavBanner from './NavBanner';

function ProductDetail() {
    const location = useLocation();
    const product = location.state.product
    return (
    <>
        <NavBanner/>
        <main className='detailContainer'>
            <div className='detailImageContainer'>
                <img src={product.image}></img>
            </div>
            <div className='detailContent'>
                <div className='detailTop'>
                    {product.newArrival == true &&
                        <h2>NEW!</h2>
                    }
                    <h1>{product.name}</h1>
                    {product.onSale == true ?
                            <div>
                                <h2 className='clearanceCross'>${product.price}</h2>
                                <h2 className='clearanceColor'>${Math.ceil(product.price*0.7)} Clearance</h2>
                            </div>
                            :
                            <div>
                                <h2>${product.price}</h2>
                            </div>
                    }
                </div>
                <div className='detailMiddle'>
                    <input name='size' type='radio' id='XS'></input>
                    <label for="XS">XS</label>
                    <input name='size' type='radio' id='S'></input>
                    <label for="S">S</label>
                    <input name='size' type='radio' id='M'></input>
                    <label for="M">M</label>
                    <input name='size' type='radio' id='L'></input>
                    <label for="L">L</label>
                    <input name='size' type='radio' id='XL'></input>
                    <label for="XL">XL</label>
                </div>
            </div>
        </main>
    </>
  )
}

export default ProductDetail
