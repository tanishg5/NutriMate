import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartitems : [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
       Setcartitems : (state , action) => {
         state.cartitems.push(action.payload);
       }
    }
})

export const  {
   Setcartitems
} = CartSlice.actions;

export default CartSlice.reducer;