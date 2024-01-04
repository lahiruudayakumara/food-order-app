const AddProduct = ({ onAddProduct }) => {
  return (
    <div className='flex justify-end'>
        <button onClick={onAddProduct} className='bg-yellow-400 hover:bg-yellow-500 rounded-md h-6 px-2  flex items-center justify-center font-bold text-xs'><span>Add to Cart</span></button>      
    </div>
  )
}

export default AddProduct
