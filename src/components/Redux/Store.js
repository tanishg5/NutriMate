import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "../Redux/FilterSlice"
export const store = configureStore({
    reducer: filterReducer,
})