import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

function Cart(props) {
    const showCart = props.showCart;
    const cartItems = props.cartItems
    const cartOpen = props.cartOpen;
    const setCartOpen = props.setCartOpen
    // useEffect(() => {
    // }, [])
    const toggleCart = () => {
        setCartOpen(false)
        setTimeout(() => {
            showCart()
        }, 500)
    }
    return (
        <>
            <main className={cartOpen ? 'cart slide-in' : 'cart slide-out'}>
                <div className='cartTop'>
                    <h2>My Cart</h2>
                    <p onClick={() => toggleCart()}>X</p>
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
                    <div className='emptyCart'>
                        <h1>Looks like your carts empty</h1>
                        <Link to="/collections/newArrivals">
                            <button onClick={showCart}>Shop new arrivals</button>
                        </Link>
                    </div>
                }
                </div>
                <div className='cartBottom'>
                    <button>CHECKOUT</button>
                </div>
            </main>
            <div className='cartBackground' onClick={showCart}>
            </div>
            </>
    )
}

export default Cart
