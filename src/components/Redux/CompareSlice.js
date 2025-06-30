import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareItems: [],
};

export const CompareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompareItems: (state, action) => {
        
    }
  },
});

export const { setCompareItems} = CompareSlice.actions;

export default CompareSlice.reducer;
