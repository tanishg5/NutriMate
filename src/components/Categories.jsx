import React from 'react';
import protein from '../assets/pro.jpg';
import multi from '../assets/multi.jpg';
import pre from '../assets/pre.jpg';
import creatine from '../assets/creatine.jpg';
import { useNavigate } from 'react-router';

function Categories() {
  const navigate = useNavigate();

  // define categories
  const categories = [
    { name: "Protein", image: protein, path: "/shop" },
    { name: "Creatine", image: creatine, path: "/shop" },
    { name: "Pre/Post-Workout", image: pre, path: "/shop" },
    { name: "Multivitamins", image: multi, path: "/shop" },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        SHOP BY CATEGORIES
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(cat.path)}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              alt={`${cat.name} supplements`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
