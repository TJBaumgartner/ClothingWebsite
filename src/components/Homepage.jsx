import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import SweaterMen from '../../public/images/SweaterMen.png'
import ShirtMen from '../../public/images/ShirtMen.png'
import ShoesMen from '../../public/images/ShoesMen.png'
import PantsMen from '../../public/images/PantsMen.png'
import SweaterWoman from '../../public/images/SweaterWoman.png'
import ShirtWoman from '../../public/images/ShirtWoman.png'
import PantsWoman from '../../public/images/PantsWoman.png'
import ShoesWoman from '../../public/images/ShoesWoman.png'


function Homepage() {

  const [menTab, setMenTab] = useState(true)
  
  const changeBrowseTab = () => {
    setMenTab(!menTab)
    console.log(menTab)
  }

    return (
    <main className='HomepageContainer'>
        <section>
          <div className='bannerPlaceholder'>
            <div className='bannerContent'>
              <h1>Start Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className='buttonContainer'>
                <Link to="/mens">
                    <h2>Men's</h2>
                </Link>
                <Link to="/womens">
                    <h2>Women's</h2>
                </Link>              
              </div>
            </div>
          </div>
        </section>
        <section className='browserContainer'>
          <h1>What We're Wearing</h1>
          {menTab == true ?
          <div>
            <div className='browserTabs'>
              <h2 className='activeTab'>Men's</h2>
              <h2 onClick={() => changeBrowseTab()} >Women's</h2>
            </div>
            <div className='browserImages'>
                <div className='imagePlaceholder'>
                  <img src={SweaterMen}></img>
                  <button>Sweaters</button>
                </div>
                <div className='imagePlaceholder'>
                  <img src={ShirtMen}></img>
                  <button>Shirts</button>
                </div>
                <div className='imagePlaceholder'>
                  <img src={PantsMen}></img>
                  <button>Pants</button>
                </div>
                <div className='imagePlaceholder'>
                  <img src={ShoesMen}></img>
                  <button>Shoes</button>
                </div>
            </div>
          </div>
          
          :  
          <div>
            <div className='browserTabs'>
              <h2 onClick={() => changeBrowseTab()} >Men's</h2>
              <h2 className='activeTab'>Women's</h2>
            </div>
            <div className='browserImages'>
              <div className='imagePlaceholder'>
                <img src={SweaterWoman}></img>
                <button>Sweaters</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={ShirtWoman}></img>
                <button>Shirts</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={PantsWoman}></img>
                <button>Pants</button>
              </div>
              <div className='imagePlaceholder'>
                <img src={ShoesWoman}></img>
                <button>Shoes</button>
              </div>
            </div>
        </div>
          }
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
            <div className='occassionImageMen'></div>
          </div>
          <div className="occassionDiv">
            <div className='occassionImageWoman'></div>
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
