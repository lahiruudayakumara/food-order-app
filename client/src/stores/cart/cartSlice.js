import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return { products: [...state.products, {...action.payload, amount: 1, totalPrice: parseInt(action.payload.price)}]}
        },
        clearCart: (state) => {
            return { products: []}
        },
        removeItem: (state, action) => {
            return { products: state.products.filter((product) => product._id !== action.payload._id) };
        },
        incrementProductAmount: (state, action) => {
            console.log('increment');
            return { 
                products: state.products.map(product => product._id === action.payload._id ? {...product, amount: product.amount + 1, totalPrice: product.totalPrice + parseInt(action.payload.price, 10)} : product)
            }
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product._id === action.payload._id ? {...product, amount: product.amount - 1, totalPrice: product.totalPrice - parseInt(product.price, 10)} : product)}
        }
    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, removeItem, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer