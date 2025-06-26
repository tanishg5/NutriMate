import React from 'react'
import { supplements } from '../assets/supplements'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router'
function Shop() {
    const navigate = useNavigate();
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(supplements.categories).map(([category, products]) => (
            products.map((item) => (
              <div 
                key={`${category}-${item.id}`} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative pb-[100%] overflow-hidden">
                  <img 
                    onClick={()=>navigate(`/product/${item.id}`)}
                    src={item.image} 
                    alt={item.name} 
                    className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-green-600">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-700">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop