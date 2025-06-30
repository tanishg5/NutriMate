import React from 'react';
import { supplements } from '../assets/supplements';
import { useNavigate } from 'react-router';
function NewArrival() {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Latest Added</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">New Arrivals</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Object.entries(supplements.categories).map(([cate, arr]) =>
          arr.slice(0, 2).map((item, index) => (
            <div 
              key={`${cate}-${index}`} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  onClick={()=>navigate(`/product/${item.id}`)}
                  src={item.image} 
                  alt={item.brand} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-md font-medium text-gray-800 mb-1">{item.brand}</h3>
                <p className="text-green-600 font-bold">
                  ₹{item.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          )))
        }
      </div>
    </section>
  );
}

export default NewArrival;