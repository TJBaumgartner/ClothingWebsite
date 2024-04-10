import { Link } from "react-router-dom";
import '../App.css'


function Sidenav(props) {

    const sex = props.sex
    const prepend = `/collections/${sex}`
    const setCategory = props.setCategory
    return (
    <nav className='sideNav'>
        <Link to={`${prepend}/arrivals`}>
            <h2 onClick={() => setCategory('arrivals')}>New Arrivals</h2>
        </Link>
        <Link to={`${prepend}/sweaters`}>
            <h2 onClick={() => setCategory('sweaters')}>Sweaters</h2>
        </Link>
        <Link to={`${prepend}/shirts`}>
            <h2 onClick={() => setCategory('shirts')}>Shirts</h2>
        </Link>
        <Link to={`${prepend}/bottoms`}>
            <h2 onClick={() => setCategory('bottoms')}>Bottoms</h2>
        </Link>
        <Link to={`${prepend}/shoes`}>
            <h2 onClick={() => setCategory('shoes')}>Shoes</h2>
        </Link>
        <Link to={`${prepend}/sale`}>
            <h2 onClick={() => setCategory('sale')}>Sale</h2>
        </Link>
        {sex == 'mens' ?
        <Link to={`/collections/mens/suits`}>
            <h2 onClick={() => setCategory('suits')}>Suits</h2>
        </Link>
        :
        <Link to={`/collections/womens/dresses`}>
            <h2 onClick={() => setCategory('dresses')}>Dresses</h2>
        </Link>
        }
    </nav>
  )
}

export default Sidenav
