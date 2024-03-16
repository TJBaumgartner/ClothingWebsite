import {useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function ProductCard(props) {
    const product = props.product
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
    <>
        <div className='productCard'>
            <Link to={`/collections/${product.gender}/${product.category}/${product.id}`} state={{product}}>
                <img src={product.image}></img>
            </Link>
            <div>
                <h1>{product.name}</h1>
                {product.onSale == true ?
                    <div>
                        <h2 className='clearanceCross'>${product.price}</h2>
                        <h2 className='clearanceColor'>${Math.ceil(product.price*0.7)} Clearance</h2>
                    </div>
                    :
                    <div>
                        <h2>${product.price}</h2>
                    </div>
                }

            </div>
        </div>
    </>
  )
}

export default ProductCard
