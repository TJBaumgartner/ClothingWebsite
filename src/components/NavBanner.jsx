import {useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

function NavBanner() {
    const sex = useParams().sex
    const category = useParams().category
    return (
    <nav className='navBanner'>
        <div>
            {sex !== null &&
            <Link to={`/collections/${sex}`}>
                <div>
                <h2>{sex}</h2>
                </div>
            </Link>
            }
            {category &&
            <Link to={`/collections/${sex}/${category}`}>
                <div>
                    <h2><span>&gt;</span>{category}</h2>            
                </div>
            </Link>
            }
        </div>
    </nav>
  )
}

export default NavBanner
