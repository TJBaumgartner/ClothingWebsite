import {useEffect, useState } from 'react'
import '../App.css'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
    <footer className='footerContainer'>
      <div className='footerContent'>
        <div className='footerColumn'>
        <h1>Help</h1>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Status</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className='footerColumn'>
        <h1>About</h1>
          <ul>
            <li>Purpose</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Membership Program</li>
            <li>Corporate Inquiries</li>
          </ul>
        </div>
        <div className='footerColumn'>
          <h1>Customer</h1>
          <ul>
            <li>Gift Cards</li>
            <li>Reviews</li>
            <li>Guarantee of Quality</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className='footerColumn icons'>
          <ul>
            <li><i className="fa fa-facebook"></i></li>
            <li><i className="fa fa-twitter"></i></li>
            <li><i className="fa fa-instagram"></i></li>
            <li><i className="fa fa-envelope"></i></li>
          </ul>
        </div>
      </div>
      <div className='footerBottom'>
        <p>© 2024 Terrence Baumgartner | All Rights Reserved | Vanilla Cosmetics</p>
      </div>
    </footer>
  )
}

export default Footer
