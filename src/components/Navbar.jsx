import {useEffect, useState } from 'react'
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
    const [displayDropDown, setDisplayDropdown] = useState(false)
    return (
    <nav className='NavbarContainer'>
        <div className='mobileNav'>
            <button onClick={() => setDisplayDropdown(!displayDropDown)}>DropDown</button>
            <div  className={displayDropDown ? 'dropdownContent dropdown-in' : 'dropdownContent dropdown-out'}>
                <p onClick={() => setDisplayDropdown(!displayDropDown)}>X</p>
                <Link to="collections/mens">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Mens</h2>
                </Link>
                <Link to="/collections/womens">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Womens</h2>
                </Link>
                <Link to="/collections/newArrivals">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>New Arrivals</h2>
                </Link>
                <Link to="collections/sale">
                    <h2 className='saleTab' onClick={() => setDisplayDropdown(!displayDropDown)}>Sale</h2>
                </Link>
                <Link to="/about">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>About Us</h2>
                </Link>
            </div>
                <i className="fa fa-shopping-cart" onClick={() => openCart()}></i>
        </div>
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
