import AddProduct from './AddProduct'

const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
      onAddProduct(product)
    }
    
  return (
    <div className='w-full p-4 m-2 rounded-2xl text-white shadow-sm bg-slate-700 text-center'>
      <img src={product.imgUrl} alt={product.name} />
      <h2 className='text-lg'>{product.name}</h2>
      <h6 className='pb-1 text-sm'>{product.adjective}</h6>
      <p className='mb-1 text-xs h-24 line-clamp-4 justify-normal text-justify'>{product.description}</p>
      <p className='line-clamp-4 justify-normal'>${product.price}</p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  )
}

export default ProductPreviewCard
