
import { useEffect, useState } from 'react'
import { getCategory } from '../../api/categoryApi';
import { addToCart } from '../../stores/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductPreviewCard from '../../components/ProductPreviewCard';
import { getProducts } from '../../api/productApi';

const Menu = () => {
    const dispatch = useDispatch();
    const [product, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
      getCategory().then(response => setCategory(response.data.data));
      getProducts().then(response => setProducts(response.data));
      console.log(category)
    }, [])

    const onAddProduct = (product) => {
      dispatch(addToCart(product))
    }

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

    return (
      <div className="">
        {
          category.length === 0 ? <Loading /> :
          <div className='mx-auto pb-4 w-2/3 p-5'>
          {
            category.map((category, index) => {
              return (
                <div key={index}>
                  <div className='bg-yellow-500 px-5 rounded'>
                    <h1 >{category.name}</h1>
                  </div>
                  <div>
                    <Carousel responsive={responsive} >
                      {
                        product.map((product, index) => {
                          if(category.name === product.category) {
                            return (
                              <div key={index}  className='w-full p-3'>
                                <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                              </div>
                            )
                          } 
                          return null
                        })
                      }
                    </Carousel>
                  </div>
                </div>
              )
            })
          }
          </div>
        }
      </div>   
    )
  }
  
  export default Menu