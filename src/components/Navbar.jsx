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
    const [displaySaleTab, setDisplaySaleTab] = useState(false)
    const [displayArrivalTab, setDisplayArrivalTab] = useState(false)

    return (
    <nav className='NavbarContainer'>
        <div className='mobileNav'>
            <i className="fa fa-bars" onClick={() => setDisplayDropdown(!displayDropDown)}></i>
            <div  className={displayDropDown ? 'dropdownContent dropdown-in' : 'dropdownContent dropdown-out'}>
                <p onClick={() => setDisplayDropdown(!displayDropDown)}>X</p>
                <Link to="collections/mens">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Mens</h2>
                </Link>
                <Link to="/collections/womens">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Womens</h2>
                </Link>
                <div className='saleTab'>
                    <h2 onClick={() => setDisplayArrivalTab(!displayArrivalTab)}>New Arrivals <i className={`fa ${displayArrivalTab ?  'fa-caret-up' : 'fa-caret-down'}`}></i></h2>
                </div>
                <div className={displayArrivalTab ? 'saleDropdownShow' : 'saleDropdownHide'}>
                    <ul>
                        <Link to="/collections/mens/arrivals">
                            <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Mens</h2>
                        </Link>
                        <Link to="/collections/womens/arrivals">
                            <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>Womens</h2>
                        </Link>
                    </ul>
                </div>
                <div className='saleTab'>
                    <h2 onClick={() => setDisplaySaleTab(!displaySaleTab)}>Sale <i className={`fa ${displaySaleTab ?  'fa-caret-up' : 'fa-caret-down'}`}></i></h2>
                </div>
                <div className={displaySaleTab ? 'saleDropdownShow' : 'saleDropdownHide'}>
                    <ul>
                        <h2>Mens</h2>
                        <h2>Womens</h2>
                    </ul>
                </div>
                <Link to="/about">
                    <h2 onClick={() => setDisplayDropdown(!displayDropDown)}>About Us</h2>
                </Link>
            </div>
                <Link to="/">
                    <img src={Logo} className='Logo'></img>
                </Link>
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
