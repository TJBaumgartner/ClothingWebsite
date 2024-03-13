import {useEffect } from 'react'
import '../App.css'

function ProductCard(props) {
    const product = props.product
    return (
    <>
        <div className='productCard'>
            <img src={product.image}></img>
            <div>
                <h1>{product.name}</h1>
                {product.onSale == true ?
                    <div>
                        <h2 className='clearanceCross'>${product.price}</h2>
                        <h2 className='clearanceColor'>${Math.ceil(product.price*0.7)}</h2>
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
