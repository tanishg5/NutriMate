import React from 'react';
import protein from '../assets/pro.jpg';
import multi from '../assets/multi.jpg';
import pre from '../assets/pre.jpg';
import creatine from '../assets/creatine.jpg';

function Categories() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">SHOP BY CATEGORIES</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Protein Card */}
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <img 
            src={protein} 
            alt="Protein supplements" 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Protein</h3>
          </div>
        </div>

        {/* Creatine Card */}
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <img 
            src={creatine} 
            alt="Creatine supplements" 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Creatine</h3>
          </div>
        </div>

        {/* Pre/Post-Workout Card */}
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <img 
            src={pre} 
            alt="Pre/Post-Workout supplements" 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Pre/Post-Workout</h3>
          </div>
        </div>

        {/* Multivitamins Card */}
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <img 
            src={multi} 
            alt="Multivitamin supplements" 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Multivitamins</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;