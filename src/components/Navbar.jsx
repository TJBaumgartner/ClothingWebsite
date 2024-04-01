import {useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import Logo from '../../public/images/VanillaLogo.png'
import 'font-awesome/css/font-awesome.min.css';


function Navbar(props) {
    const showCart = props.showCart;
    const setCartOpen = props.setCartOpen
    const openCart = () => {
        setCartOpen(true)
        showCart()
    }
    return (
    <nav className='NavbarContainer'>
        <div className='Navbar'>
            <div className='NavbarLeft'>
                <Link to="/">
                    <img src={Logo} className='Logo'></img>
                </Link>
                <Link to="collections/mens">
                    <h2>Mens</h2>
                </Link>
                <Link to="/collections/womens">
                    <h2>Womens</h2>
                </Link>
                <Link to="/collections/newArrivals">
                    <h2>New Arrivals</h2>
                </Link>
                <Link to="collections/sale">
                    <h2 className='saleTab'>Sale</h2>
                </Link>
            </div>
            <div className='NavbarRight'>
                <Link to="/about">
                    <h2>About Us</h2>
                </Link>
                <i className="fa fa-shopping-cart" onClick={() => openCart()}></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
