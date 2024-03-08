import {useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import Logo from '../../public/assets/VanillaLogo.png'
import 'font-awesome/css/font-awesome.min.css';


function Navbar() {
    return (
    <nav className='NavbarContainer'>
        <div className='Navbar'>
            <div className='NavbarLeft'>
                <Link to="/">
                    <img src={Logo} className='Logo'></img>
                </Link>
                <Link to="/mens">
                    <h2>Mens</h2>
                </Link>
                <Link to="/womens">
                    <h2>Womens</h2>
                </Link>
                <Link to="/sale">
                    <h2>Sale</h2>
                </Link>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
            </div>
            <div className='NavbarRight'>
                <i className="fa fa-shopping-cart"></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
