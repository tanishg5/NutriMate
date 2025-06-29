import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "../Redux/FilterSlice"
import CartReducer from "../Redux/CartSlice"
export const store = configureStore({
    reducer: {
  filters: filterReducer,
  cart: CartReducer
}
})