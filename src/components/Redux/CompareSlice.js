import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  compareItems: [],
};

export const CompareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompareItems: (state, action) => {
    const existing = state.compareItems.filter(item=>item.id === action.payload.id)
    if(existing.length===0){
      if (state.compareItems.length === 0) {
        state.compareItems.push(action.payload);
        toast.success("Product added to comparison");
      }      
      else {
        const whichCateg = state.compareItems[0].category;
        const TakeOrNotTake = action.payload;
        if (TakeOrNotTake.category !== whichCateg) {
            toast.error("Please select products from the same category");
        }
        else if (state.compareItems.length >= 3) {
            toast.error(`You can compare up to ${3} products at a time`);
        } 
        else {
          state.compareItems.push(action.payload);
          toast.success("Product added to comparison");
        }
      }
    }
    else {
        toast.info("This product is already in your comparison list");
    }
    },
    removeCompare : (state , action) => {
        state.compareItems = state.compareItems.filter(item=>item.id!==action.payload)
    },
    clearCompare : (state , action) => {
        state.compareItems = []
    }
  },
});

export const { setCompareItems  , removeCompare , clearCompare} = CompareSlice.actions;

export default CompareSlice.reducer;
