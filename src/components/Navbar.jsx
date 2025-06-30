import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 bg-green-50 shadow-md w-full">
      <div className="text-2xl font-bold text-green-700 mb-2 sm:mb-0">
        🌿 NutriMate
      </div>
      <ul className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-6 items-center">
        <li>
          <NavLink 
            to="/" 
            exact
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/recommended" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/compare" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Compare
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-us" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className="text-gray-600 hover:text-green-700 transition-colors text-base sm:text-lg"
            activeClassName="text-green-700 font-medium"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;