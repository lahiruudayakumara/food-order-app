import React, { useEffect, useState } from 'react'
import ProductPreviewCard from './ProductPreviewCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import img from "../assets/images/pizza_banner.png"
import { getProducts } from '../api/productApi';
import { addToCart } from '../stores/cart/cartSlice';

const ProductsPreview = () => {
    const [product, setProducts] = useState([]);

    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    useEffect(() => {
        getProducts().then(response => setProducts(response.data));
        console.log(...product);
    }, [])
    
    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

  return (
    <div className='container mx-auto pb-4 w-2/3 text-white'>
        <Carousel responsive={responsive} >
        {
            product.length > 0 && product.map((product, index) => {
                return (
                    <div key={index}  className='w-full p-3'>
                        <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                    </div>
                )
            })
        }
        </Carousel>
    </div>
  )
}

export default ProductsPreview