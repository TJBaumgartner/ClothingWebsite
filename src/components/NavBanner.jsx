import {useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

function NavBanner(props) {
    const sex = useParams().sex
    const setCategory = props.setCategory
    const category = props.category
    return (
    <nav className='navBanner'>
        <div>
            {sex !== null &&
            <Link to={`/collections/${sex}`}>
                <div>
                <h2 onClick={() => setCategory(null)}>{sex}</h2>
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
