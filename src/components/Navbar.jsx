import {useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Navbar() {
    return (
    <nav className='Navbar'>
        <div className='NavbarLeft'>
            <Link to="/">
                <h1>Home</h1>
            </Link>
        </div>
        <div className='NavbarRight'>
            <Link to="/mens">
                <h1>Mens</h1>
            </Link>
            <Link to="/womens">
                <h1>Womens</h1>
            </Link>
            <Link to="/sale">
                <h1>Sale</h1>
            </Link>
            <h1>Cart</h1>
        </div>
    </nav>
  )
}

export default Navbar
