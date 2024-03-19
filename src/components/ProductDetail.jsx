import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import NavBanner from './NavBanner';
import { Products } from '../products';

function ProductDetail() {
    
    
    const [quantity, setQuantity] = useState(1)
    
    const [slideProducts, setSlideProducts] = useState()
    const [slide, setSlide] = useState(0)
    const location = useLocation();
    const product = location.state.product

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    useEffect(() => {
        const filteredProducts = Products.filter(similarProduct => {
        if((similarProduct.category == product.category && similarProduct.gender == product.gender)){
          return true
        } else {
          return false
        }
      })
      console.log(filteredProducts)
      setSlideProducts(filteredProducts)
    }, [])
    // useEffect(() => {
    //     const shuffle = (array) => {
    //       for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //       }
    //     };
      
    // const fetchPokemon = async () => {
    //     //here I fetch my pokemon
    //     const promises = [];
    //     for (let i = 1; i <= 10; i++) {
    //     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //     let response = await fetch(url);
    //     let result = await response.json();
    //     promises.push(result);
    //     }
    
    //     const data = await Promise.all(promises);
    //     shuffle(data);
    //     setPokemon(data);
    // };
    // fetchPokemon();
    // }, []);



    const increaseQuantity = () => {
        if(quantity < 5){
            setQuantity(quantity+1)
        }
    }
    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
    <>
        <NavBanner/>
        <main className='detailContainer'>
            <div className='detailImageContainer'>
                <img src={product.image}></img>
            </div>
            <div className='detailContent'>
                <div className='detailTop'>
                    {product.newArrival == true &&
                        <h2>NEW!</h2>
                    }
                    <h1>{product.name}</h1>
                    {product.onSale == true ?
                            <div className='clearanceContainer'>
                                <h2 className='clearanceCross'>${product.price}</h2>
                                <h2 className='clearanceColor'>${Math.ceil(product.price*0.7)} Clearance (30%off)</h2>
                            </div>
                            :
                            <div>
                                <h2>${product.price}</h2>
                            </div>
                    }
                </div>
                <div className='detailMiddle'>
                    <h1>Select Size:</h1>
                    <div className='sizeContainer'>
                        <input name='size' type='radio' id='XS'></input>
                        <label htmlFor="XS">XS</label>
                        <input name='size' type='radio' id='S'></input>
                        <label htmlFor="S">S</label>
                        <input name='size' type='radio' id='M'></input>
                        <label htmlFor="M">M</label>
                        <input name='size' type='radio' id='L'></input>
                        <label htmlFor="L">L</label>
                        <input name='size' type='radio' id='XL'></input>
                        <label htmlFor="XL">XL</label>
                    </div>
                    <div className='quantityContainer'>
                        <h2>Quantity</h2>
                        <div>
                            <button onClick={() => decreaseQuantity()} className='sideButton'>-</button>
                            <button className='quantityButton'>{quantity}</button>
                            <button onClick={() => increaseQuantity()} className='sideButton'>+</button>
                        </div>
                    </div>
                    <div className='addCartContainer'>
                        <button className='addToCartButton'>Add To Cart</button>
                        <p>Free Shipping Over $99</p>
                    </div>
                    <div className='descriptionContainer'>
                        <div className='guarantee'>
                            <h1>Quality Guarantee!</h1>
                            <p>We strive to ensure only the best quality material and products are availible to our customers.</p>
                        </div>
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default ProductDetail
