import AddProduct from './AddProduct'

const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
      onAddProduct(product)
    }
  return (
    <div className='w-full p-4 m-2 rounded-2xl text-white shadow-sm bg-slate-700 text-center'>
      <img src={product.imgUrl} alt={product.name} />
      <h2 className='pb-2 text-lg'>{product.name}</h2>
      <p className='mb-2 h-36 line-clamp-4 justify-normal'>{product.description}</p>
      <AddProduct onAddProduct={AddProduct} />
    </div>
  )
}

export default ProductPreviewCard
