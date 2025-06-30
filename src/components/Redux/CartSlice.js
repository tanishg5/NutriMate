import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartitems : [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
       Setcartitems : (state , action) => {
          const existing = state.cartitems.find(item=>item.id === action.payload.id)
         if(existing) {
            existing.quantity += 1;
         }
         else state.cartitems.push({...action.payload , quantity: 1});
       },
       removeFromCart: (state , action) => {
          state.cartitems = state.cartitems.filter((item)=>item.id!==action.payload);
       },
       ClearCart : (state , action) => {
        state.cartitems = []
       }
    }
})

export const  {
   Setcartitems,
   removeFromCart , 
   ClearCart
} = CartSlice.actions;

export default CartSlice.reducer;