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
import { Products } from '../products'


function Homepage() {

  const [menTab, setMenTab] = useState(true)
  const [products, setProducts] = useState()
  const [slide, setSlide] = useState(0)
  const [tabString, setTabString] = useState('mens')

  useEffect(() => {
    const filteredProducts = Products.filter(product => {
      if((product.newArrival == true)){
        return true
      } else {
        return false
      }
    })
    setProducts(filteredProducts)
  }, [])

  const changeBrowseTab = () => {
    setMenTab(!menTab)
    if(tabString == 'mens'){
      setTabString('womens')
    } else {
      setTabString('mens')
    }
    console.log(menTab)
  }
  const previousSlide = () => {
    if(slide > 4){
      setSlide(slide - 5)
    } else if(slide == 0) {
      setSlide(8)
    } else {
      setSlide(0)
    }
  }
  const nextSlide = () => {
    console.log(slide)
    if(slide < 5){
      setSlide(slide + 5)
    } else if(slide == 5){
      setSlide(slide + 3)
    } else{
      setSlide(0)
    }
  }
    return (
    <main className='HomepageContainer'>
        <section>
          <div className='bannerPlaceholder'>
            <div className='bannerContent'>
              <h1>Explore Our Collections</h1>
              <p>We strive to provide the best clothing and service suitable for any occassion you might need.</p>
              <div className='buttonContainer'>
                <Link to="/collections/mens">
                    <h2>Men's</h2>
                </Link>
                <Link to="/collections/womens">
                    <h2>Women's</h2>
                </Link>              
              </div>
            </div>
          </div>
        </section>
        <section className='newReleases'>
          <h1>New Releases</h1>
          <div className='slideshowContainer'>
            <button onClick={() => previousSlide()} className='decreaseSlide'>&lt;</button>
            <div className='slideShow'>
                {products &&
                  products.map((product, idx) => (
                    <div className={(slide < idx && idx < slide +6) ? "slide" : "slideHidden"} key={idx}>
                      <Link to={`/collections/${product.gender}/${product.category}/${product.id}`} state={{product}}>
                        <img src={product.image}></img>
                      </Link>
                      {/* <img src={product.image}/> */}
                      <h1>{product.name}</h1>
                    </div>
                  ))
                }
            </div>
            <button onClick={() => nextSlide()} className='increaseSlide'>&gt;</button>
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
                  <Link to={`/collections/${tabString}/sweaters`}>
                    <button>Sweaters</button>
                  </Link>
                </div>
                <div className='imagePlaceholder'>
                  <img src={ShirtMen}></img>
                  <Link to={`/collections/${tabString}/shirts`}>
                    <button>Shirts</button>
                  </Link>
                </div>
                <div className='imagePlaceholder'>
                  <img src={PantsMen}></img>
                  <Link to={`/collections/${tabString}/bottoms`}>
                    <button>Pants</button>
                  </Link>
                </div>
                <div className='imagePlaceholder'>
                  <img src={ShoesMen}></img>
                  <Link to={`/collections/${tabString}/shoes`}>
                    <button>Shoes</button>
                  </Link>
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
                <Link to={`/collections/${tabString}/sweaters`}>
                    <button>Sweaters</button>
                  </Link>
              </div>
              <div className='imagePlaceholder'>
                <img src={ShirtWoman}></img>
                <Link to={`/collections/${tabString}/shirts`}>
                    <button>Shirts</button>
                  </Link>
              </div>
              <div className='imagePlaceholder'>
                <img src={PantsWoman}></img>
                <Link to={`/collections/${tabString}/bottoms`}>
                    <button>Pants</button>
                  </Link>
              </div>
              <div className='imagePlaceholder'>
                <img src={ShoesWoman}></img>
                <Link to={`/collections/${tabString}/shoes`}>
                    <button>Shoes</button>
                </Link>
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
                Shop the finest high quality suits for any occassion. Be it a wedding, formal gathering, or a buisiness meeting, our top of the line suits are sure to keep you fashionable and comfortable for wherever life takes you.
              </p>
              <Link to={`/collections/mens/suits`}>
                    <button>Shop Suits</button>
              </Link>
            </div>
            <Link to={`/collections/mens/suits`}>
              <div className='occassionImageMen'></div>
            </Link>             </div>
          <div className="occassionDiv">
            <Link to={`/collections/womens/dresses`}>
              <div className='occassionImageWoman'></div>
            </Link>            
            <div className='occassionContent'>
              <p>
              Our premium quality dresses are perfect for looking and feeling great. We deliever dresses for all situations be it casual or professional to have you looking your best for your best moments.
              </p>
              <Link to={`/collections/womens/dresses`}>
                    <button>Shop Dresses</button>
              </Link>            
            </div>
          </div>
        </section>
        <section className='homeAboutContainer'>
          <h1>What we are all about</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to={`/about`}>
                    <button>About Us</button>
          </Link>              
        </section>
    </main>
  )
}

export default Homepage
