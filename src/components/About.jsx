import {useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import AboutImage1 from '../../public/images/AboutImage1.png'
import AboutImage2 from '../../public/images/AboutImage2.png'
import AboutImage3 from '../../public/images/AboutImage3.png'


function About() {
    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [])
    return (
    <main className='aboutContainer'>
        <div className='aboutBanner'>
          <div className='aboutBannerContent'>
            <h1>Clothing For Everyone</h1>
            <p>We offer a vast and diverse set of clothing for all shapes, sizes, and events. Made with top of the line materials and passion we are positive you will find something that suits you.</p>
            <Link to={`/collections/newArrivals`}>
              <button className='aboutButton'>Discover Styles</button>
            </Link>
          </div>
        </div>
        <div className='aboutContentContainer'>
          <div className='aboutContent'>
            <div className='aboutImage'><img src={AboutImage1}></img></div>
            <div className='aboutText'>
              <div>
                <h1>Our Purpose</h1>
                <p>We strive to provide you with the highest quality clothing both comfortable and trendy for your everyday needs as well as your special moments. For years we have iterated and improved on our products to make sure only the best is supplied to our loyal supporters.</p>
              </div>
            </div>
          </div>
          <div className='aboutContent'>
            <div className='aboutText'>
              <div>
                <h1>Who We're For</h1>
                <p>We celebrate all styles and backgrounds with our clothing line reflecting the uniquiness of every individual. No style is outdated as we incoorperate pieces of our past to make a better future with our long lasting designs building upon previous concepts.</p>
              </div>
            </div>
            <div className='aboutImage'><img src={AboutImage2}></img></div>
          </div>
          <div className='aboutContent'>
            <div className='aboutImage'><img src={AboutImage3}></img></div>
            <div className='aboutText'>
              <div>
                <h1>Who We Are</h1>
                <p>Founded last year by a tight-knit group of friends with the goal of spreading our love for fashion to the world we have continued to evolve with the trends while retaining the roots of the styles that made them so popular to being with.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutBottom'>
          <div>
            <p>At Vanilla Cosmetics we are a family. We pride ourselves on the community that built us up and as such would like to give back in anyway we can. Join our community to keep up to date on our newest ventures and get exclusing deals when we release our products.</p>
            <button className='aboutButton'>Become a member</button>
          </div>
        </div>
    </main>
  )
}

export default About
