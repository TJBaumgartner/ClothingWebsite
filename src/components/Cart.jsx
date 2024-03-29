import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

function Cart(props) {
    const showCart = props.showCart;
    const cartItems = props.cartItems
    // useEffect(() => {
    // }, [])
    return (
        <main className='cart'>
            <p onClick={() => showCart()}>X</p>
            {cartItems.length > 0 ?
                cartItems.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                ))
                :
                <div>
                    <h1>Looks like your carts empty</h1>
                    <button>Shop new arrivals</button>
                </div>
            }
        </main>
    )
}

export default Cart
