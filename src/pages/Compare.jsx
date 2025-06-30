import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCompare,
  clearCompare
} from '../components/Redux/CompareSlice';

function Compare() {
  const compareItems = useSelector(state => state.compare.compareItems);
  const dispatch = useDispatch();

  if (compareItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-2xl font-semibold text-gray-700">Your compare list is empty</h2>
        <p className="text-gray-500">Add products to compare their features</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Compare Products ({compareItems.length})</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compareItems.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 font-medium mb-2">{item.brand}</p>
              <p className="text-gray-600 font-medium mb-2">Rating: {item.rating}</p>
              <p className="text-gray-600 font-medium mb-2">Price: ₹{item.price}</p>
              <p className="text-gray-500 mb-4 line-clamp-3">{item.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Nutrition:</h4>
                {Object.entries(item.nutrition).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => dispatch(removeCompare(item.id))}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => dispatch(clearCompare())}
          className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md transition-colors"
        >
          Clear All ({compareItems.length})
        </button>
      </div>
    </div>
  );
}

export default Compare;