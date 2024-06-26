import {useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../App.css'
import NavBanner from './NavBanner';
import { Products } from '../products';

function ProductDetail(props) {

    const location = useLocation();
    const product = location.state.product
    const cartItems = props.cartItems
    const showCart = props.showCart
    const setCartItems = props.setCartItems
    const setCartOpen = props.setCartOpen
    const [quantity, setQuantity] = useState(1)
    const [slideProducts, setSlideProducts] = useState()
    const [slide, setSlide] = useState(0)
    const [size, setSize] = useState((product.category == 'shoes') ? '9' : 'M')
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1024);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });
    useEffect(() => {
        const filteredProducts = Products.filter(similarProduct => {
        if((similarProduct.trending == true && similarProduct.gender == product.gender && similarProduct.name !== product.name)){
            return true
        } else {
            return false
        }
        })
        setSlideProducts(filteredProducts)
        window.scrollTo(0, 0);
    }, [])

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

    const previousSlide = () => {
        if(!isDesktop){
            if(slide == 0) {
              return setSlide(slideProducts.length - 2)
            } else {
              return setSlide(slide - 1)
            }
        }
        if(slide > 0){
            setSlide(slide-1)
        } else {
            setSlide(slideProducts.length -6)
        }
    }
    const nextSlide = () => {
        if(!isDesktop){
            if(slide == slideProducts.length - 2) {
              return setSlide(0)
            } else {
              return setSlide(slide + 1)
            }
        }
        if(slide < slideProducts.length - 6){
            setSlide(slide+1)
        } else {
            setSlide(0)
        }
    }
    const handleSizeChange = (value) => {
        if(product.category == 'shoes'){
        switch(value) {
            case "8":
                setSize(value)
            break;
            case "8.5":
                setSize(value)
            break;
            case "9":
                setSize(value)
            break;
            case "9.5":
                setSize(value)
            break;
            case "10":
                setSize(value)
            break;  
            }
        }
        switch(value) {
            case "XS":
                setSize(value)
            break;
            case "S":
                setSize(value)
            break;
            case "M":
                setSize(value)
            break;
            case "L":
                setSize(value)
            break;
            case "XL":
                setSize(value)
            break;  
            }
        setSize(value)
    }

    const cartAdd = () => {
        if(cartItems.some(item => item.name === product.name && item.size === size ? item.quantity = item.quantity + quantity : null)){
            setCartOpen(true)
            return showCart()
        }
        let price = 0
        if(product.onSale == true){
           price = (Math.ceil(product.price*0.7))
        } else{
            price = product.price
        }
        let newItem = {
            name: product.name, 
            size: size,
            quantity: quantity,
            image: product.image,
            price: price
        }
        if(cartItems.length > 0){
            setCartItems([
                ...cartItems, newItem
            ])
        } else{
            setCartItems([
                newItem
            ])
        }
        setCartOpen(true)
        showCart()
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
                    {product.category == 'shoes' ? 
                        <div className='sizeContainer'>
                            <input type='radio' id='XS' checked={size === '8'} onChange={() => handleSizeChange('8')}></input>
                            <label htmlFor="XS">8</label>
                            <input type='radio' id='S' checked={size === '8.5'} onChange={() => handleSizeChange('8.5')}></input>
                            <label htmlFor="S">8.5</label>
                            <input type='radio' id='M' checked={size === '9'} onChange={() => handleSizeChange('9')}></input>
                            <label htmlFor="M">9</label>
                            <input type='radio' id='L' checked={size === '9.5'} onChange={() => handleSizeChange('9.5')}></input>
                            <label htmlFor="L">9.5</label>
                            <input type='radio' id='XL' checked={size === '10'} onChange={() => handleSizeChange('10')}></input>
                            <label htmlFor="XL">10</label>
                        </div>
                    :
                        <div className='sizeContainer'>
                            <input type='radio' id='XS' checked={size === 'XS'} onChange={() => handleSizeChange('XS')}></input>
                            <label htmlFor="XS">XS</label>
                            <input type='radio' id='S' checked={size === 'S'} onChange={() => handleSizeChange('S')}></input>
                            <label htmlFor="S">S</label>
                            <input type='radio' id='M' checked={size === 'M'} onChange={() => handleSizeChange('M')}></input>
                            <label htmlFor="M">M</label>
                            <input type='radio' id='L' checked={size === 'L'} onChange={() => handleSizeChange('L')}></input>
                            <label htmlFor="L">L</label>
                            <input type='radio' id='XL' checked={size === 'XL'} onChange={() => handleSizeChange('XL')}></input>
                            <label htmlFor="XL">XL</label>
                        </div>
                    }
                    <div className='quantityContainer'>
                        <h2>Quantity</h2>
                        <div>
                            <button onClick={() => decreaseQuantity()} className='sideButton'>-</button>
                            <button className='quantityButton'>{quantity}</button>
                            <button onClick={() => increaseQuantity()} className='sideButton'>+</button>
                        </div>
                    </div>
                    <div className='addCartContainer'>
                        <button className='addToCartButton' onClick={() => cartAdd()}>Add To Cart</button>
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
        <section className='trending'>
          <h1>Trending</h1>
          <div className='slideshowContainer'>
            <button onClick={() => previousSlide()} className='decreaseSlide'>&lt;</button>
            <div className='slideShow'>
                {slideProducts &&
                  slideProducts.map((product, idx) => (
                    <div className={(slide < idx && idx < slide +6) ? "slide" : "slideHidden"} key={idx}>
                      <Link to={`/collections/${product.gender}/${product.category}/${product.id}`} state={{product}}>
                        <img src={product.image} onClick={() => window.scrollTo(0,0)}></img>
                      </Link>
                      <h2>{product.name}</h2>
                    </div>
                  ))
                }
            </div>
            <button onClick={() => nextSlide()} className='increaseSlide'>&gt;</button>
          </div>
        </section>
    </>
  )
}

export default ProductDetail
