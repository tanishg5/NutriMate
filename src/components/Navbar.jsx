import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-green-50 via-white to-green-100 shadow-lg rounded-b-2xl w-full">
      <div className="text-3xl font-extrabold text-green-700 mb-2 sm:mb-0 tracking-tight drop-shadow flex items-center gap-2">
        <span role="img" aria-label="leaf">🌿</span> NutriMate
      </div>
      <ul className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-8 items-center">
        <li>
          <NavLink 
            to="/" 
            exact
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/recommended" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/compare" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Compare
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-us" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className="text-gray-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors text-base sm:text-lg font-medium"
            activeClassName="text-green-700 bg-green-100 font-bold"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;