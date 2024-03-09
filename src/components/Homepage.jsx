import {useEffect } from 'react'
import '../App.css'
import Sweater from '../../public/assets/Sweater.png'
import Shirt from '../../public/assets/Shirt.png'
import Shoes from '../../public/assets/Shoes.png'
import Pants from '../../public/assets/Pants.png'

function Homepage() {
    return (
    <main className='HomepageContainer'>
        <section>
          <div className='bannerPlaceholder'>
            <div className='bannerContent'>
              <h1>Start Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className='buttonContainer'>
                <button>Men's</button>
                <button>Women's</button>
              </div>
            </div>
          </div>
        </section>
        <section className='browserContainer'>
          <h1>What We're Wearing</h1>
          <div className='browserTabs'>
            <h2>Men's</h2>
            <h2>Women's</h2>
          </div>
          <div className='browserImages'>
              
              <div className='imagePlaceholder'>
                <img src={Sweater}></img>
                <button>Sweaters</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={Shirt}></img>
                <button>Shirts</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={Pants}></img>
                <button>Pants</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={Shoes}></img>
                <button>Shoes</button>
              </div>
          </div>
        </section>
        <section className='occassionContainer'>
          <h1>Dress to Impress</h1>
          <div className='occassionDiv'>
            <div className='occassionContent'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>Men's Suits</button>
            </div>
            <div className='occassionImage'></div>
          </div>
          <div className="occassionDiv">
            <div className='occassionImage'></div>
            <div className='occassionContent'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>Women's Dresses</button>
            </div>
          </div>
        </section>
        <section className='aboutContainer'>
          <h1>What we are all about</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button>About</button>
        </section>
    </main>
  )
}

export default Homepage
