import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "../Redux/FilterSlice"
import CartReducer from "../Redux/CartSlice"
import CompareReducer from "../Redux/CompareSlice"
export const store = configureStore({
    reducer: {
  filters: filterReducer,
  cart: CartReducer,
  compare : CompareReducer
}  
})