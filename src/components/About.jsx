import {useEffect } from 'react'
import '../App.css'
import AboutImage1 from '../../public/images/AboutImage1.png'
import AboutImage2 from '../../public/images/AboutImage2.png'
import AboutImage3 from '../../public/images/AboutImage3.png'


function About() {
    return (
    <main className='aboutContainer'>
        <div className='aboutBanner'>
          <div className='aboutBannerContent'>
            <h1>This is our about us</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            <button>Call To Action</button>
          </div>
        </div>
        <div className='aboutContentContainer'>
          <div className='aboutContent'>
            <div className='aboutImage'><img src={AboutImage1}></img></div>
            <div className='aboutText'>Text Side</div>
          </div>
          <div className='aboutContent'>
            <div className='aboutText'>Text Side</div>
            <div className='aboutImage'><img src={AboutImage2}></img></div>
          </div>
          <div className='aboutContent'>
            <div className='aboutImage'><img src={AboutImage3}></img></div>
            <div className='aboutText'>Text Side</div>
          </div>
        </div>
        <div className='aboutBottom'>
          Become a part of the community
        </div>
    </main>
  )
}

export default About
