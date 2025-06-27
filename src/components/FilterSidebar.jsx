import { useDispatch} from "react-redux";
import {
  setCategory,
  setBrand,
  setMin,
  setMax,
  setRating,
  setSortBy
} from "./Redux/FilterSlice"

export default function FilterSidebar() {
     const dispatch = useDispatch();
    return (
      <aside className="w-64 border-r bg-gray-50 p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-green-600">Filters</h2>
  
        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <button  onClick={()=>dispatch(setCategory("protein"))} className="block w-full text-left hover:text-green-700 mb-1">Protein</button>
          <button  onClick={()=>dispatch(setCategory("creatine"))}className="block w-full text-left hover:text-green-700 mb-1">Creatine</button>
          <button  onClick={()=>dispatch(setCategory("pre_post_workout"))} className="block w-full text-left hover:text-green-700 mb-1">Pre-Workout</button>
          <button  onClick={()=>dispatch(setCategory("multivitamin"))} className="block w-full text-left hover:text-green-700 mb-1">Multivitamin</button>
        </div>
  
        {/* Brand */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Brand</h3>
          <button onClick={()=>dispatch(setBrand("MuscleBlaze"))} className="block w-full text-left hover:text-green-700 mb-1">MuscleBlaze</button>
          <button onClick={()=>dispatch(setBrand("Optimum Nutrition"))} className="block w-full text-left hover:text-green-700 mb-1">Optimum Nutrition</button>
          <button onClick={()=>dispatch(setBrand("BigMuscles"))} className="block w-full text-left hover:text-green-700 mb-1">BigMuscles</button>
          <button onClick={()=>dispatch(setBrand("Avvatar"))} className="block w-full text-left hover:text-green-700 mb-1">Avvatar</button>
        </div>
  
        {/* Price */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            onChange={()=>dispatch(setMin(e.target.value))}
            type="number"
            placeholder="Min"
            className="border px-2 py-1 rounded w-full mb-2"
          />
          <input
            onChange={()=>dispatch(setMax(e.target.value))}
            type="number"
            placeholder="Max"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
  
        {/* Rating */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Rating</h3>
          <button  onClick={()=>dispatch(setRating(4))} className="block w-full text-left hover:text-green-700 mb-1">4 stars & up</button>
          <button  onClick={()=>dispatch(setRating(3))} className="block w-full text-left hover:text-green-700 mb-1">3 stars & up</button>
          <button  onClick={()=>dispatch(setRating(2))} className="block w-full text-left hover:text-green-700 mb-1">2 stars & up</button>
        </div>
  
        {/* Sort (optional) */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Sort By</h3>
          <select onChange={()=>dispatch(setSortBy(e.target.value))} className="border px-2 py-1 rounded w-full">
            <option>None</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Popularity</option>
          </select>
        </div>
  
        {/* Clear */}
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 w-full">
          Clear Filters
        </button>
      </aside>
    );
  }
  