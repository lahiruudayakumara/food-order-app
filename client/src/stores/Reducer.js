import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice"

const Reducer = combineReducers(
    {cart: cartReducer}
);

export default Reducer;