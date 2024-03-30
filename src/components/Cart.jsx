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
            <div className='cartTop'>
                <h2>My Cart</h2>
                <p onClick={() => showCart()}>X</p>
            </div>
            <div className='cartItemsContainer'>
            {cartItems.length > 0 ?
                cartItems.map((item) => (
                    <div className='cartItem'>
                        <div className='cartImage'>
                            <img src={item.image}></img>

                        </div>
                        <div className='cartContent'>
                            <h1>{item.name}</h1>
                            <p>${item.price}.00</p>
                            <p>Size: {item.size}</p>
                            <p>{item.quantity}</p>
                        </div>
                        <div className='cartRemove'>
                            <p>Remove</p>
                        </div>
                    </div>
                ))
                :
                <div>
                    <h1>Looks like your carts empty</h1>
                    <button>Shop new arrivals</button>
                </div>
            }
            </div>
            <div className='cartBottom'>
                <button>CHECKOUT</button>
            </div>
        </main>
    )
}

export default Cart
