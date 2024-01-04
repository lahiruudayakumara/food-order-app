import AddProduct from './AddProduct'
import Rating from '@mui/material/Rating';

const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
      onAddProduct(product)
    }

    const sumRating = product.rating.reduce((sum, rating) => sum + rating, 0)
    const averageRating = sumRating / product.rating.length
    
  return (
    <div className='w-full p-4 m-2 rounded-md text-white shadow-sm bg-[#F2F2F2] text-center'>
      <img src={product.imgUrl} alt={product.name} className='' />
      <h2 className='text-lg font-bold text-left text-black'>{product.name}</h2>
      <p className='mb-1 text-xs h-24 line-clamp-4 justify-normal text-justify text-[#525252]'>{product.description}</p>
      <div className='flex justify-between'>
        <p className='line-clamp-4 justify-normal font-bold text-left text-black'>${product.price}</p>
        <AddProduct onAddProduct={addProduct} />
      </div>
      <div className={`flex items-center justify-center ${averageRating? 'text-[#f1c200]' : 'text-[#525252]'}`}>
        <span>{averageRating? averageRating : 0 }</span>
        <Rating name="read-only" defaultValue={averageRating} precision={0.5} readOnly/>
      </div>
    </div>
  )
}

export default ProductPreviewCard
