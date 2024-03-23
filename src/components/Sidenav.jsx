import { Link } from "react-router-dom";
import '../App.css'


function Sidenav(props) {

    const sex = props.sex
    const prepend = `/collections/${sex}`
    return (
    <nav className='sideNav'>
        <Link to={`${prepend}/arrivals`}>
            <h2>New Arrivals</h2>
        </Link>
        <Link to={`${prepend}/sweaters`}>
            <h2>Sweaters</h2>
        </Link>
        <Link to={`${prepend}/shirts`}>
            <h2>Shirts</h2>
        </Link>
        <Link to={`${prepend}/bottoms`}>
            <h2>Bottoms</h2>
        </Link>
        <Link to={`${prepend}/shoes`}>
            <h2>Shoes</h2>
        </Link>
        <Link to={`${prepend}/sale`}>
            <h2>Sale</h2>
        </Link>
        {sex == 'mens' ?
        <Link to={`/collections/mens/suits`}>
            <h2>Suits</h2>
        </Link>
        :
        <Link to={`/collections/womens/dresses`}>
            <h2>Dresses</h2>
        </Link>
        }
    </nav>
  )
}

export default Sidenav
