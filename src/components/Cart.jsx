import {useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

function Cart(props) {
    const showCart = props.showCart;
    const cartItems = props.cartItems
    const cartOpen = props.cartOpen;
    const setCartOpen = props.setCartOpen
    const setCartItems = props.setCartItems
    const [items, setItems] = useState(cartItems)
    useEffect(() => {
        setItems(cartItems)
    }, [cartItems])
    const toggleCart = () => {
        setCartOpen(false)
        setTimeout(() => {
            showCart()
        }, 500)
    }
    const removeFromCart = (index) => {
        let cloneArray = [...items]
        let filteredArray = cloneArray.filter((item, idx) => idx !== index)
        console.log(filteredArray)
        setCartItems(
            filteredArray
        )
    }
    return (
        <>
            <main className={cartOpen ? 'cart slide-in' : 'cart slide-out'}>
                <div className='cartTop'>
                    <h2>My Cart</h2>
                    <p onClick={() => toggleCart()}>X</p>
                </div>
                <div className='cartItemsContainer'>
                {items.length > 0 ?
                    items.map((item, index) => (
                        <div className='cartItem' key={index}>
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
                                <p onClick={() => removeFromCart(index)}>Remove</p>
                            </div>
                        </div>
                    ))
                    :
                    <div className='emptyCart'>
                        <h1>Looks like your carts empty</h1>
                        <Link to="/collections/newArrivals">
                            <button onClick={() => toggleCart()}>Shop new arrivals</button>
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
