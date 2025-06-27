import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    Category : null, 
    Brand : null, 
    Min : null, 
    Max : null,
    Rating : null , 
    SortBy : null
}

export const filterSlice = createSlice({
     name : 'filter', 
     initialState, 
     reducers: {
        setCategory : (state , action) => {
            state.Category = action.payload;
        },
        setBrand: (state , action) => {
            state.Brand = action.payload;
        },
        setMin : (state , action) => {
            state.Min = action.payload;
        },
        setMax : (state , action) => {
            state.Max = action.payload;
        },
        setRating : (state , action) => {
            state.Rating = action.payload;
        },
        setSortBy: (state , action)=> {
            state.SortBy = action.payload;
        }
     }
})

export const {
  setCategory,
  setBrand,
  setMin,
  setMax,
  setRating,
  setSortBy
} = filterSlice.actions

export default filterSlice.reducer