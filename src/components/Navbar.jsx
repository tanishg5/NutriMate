import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-50 shadow-md">
      <div className="text-2xl font-bold text-green-700">🌿 NutriMate</div>
      <ul className="flex space-x-6">
        <li>
          <NavLink 
            to="/" 
            exact
            className="text-gray-600 hover:text-green-700 transition-colors"
            activeClassName="text-green-700 font-medium"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop" 
            className="text-gray-600 hover:text-green-700 transition-colors"
            activeClassName="text-green-700 font-medium"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/recommended" 
            className="text-gray-600 hover:text-green-700 transition-colors"
            activeClassName="text-green-700 font-medium"
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-us" 
            className="text-gray-600 hover:text-green-700 transition-colors"
            activeClassName="text-green-700 font-medium"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className="text-gray-600 hover:text-green-700 transition-colors"
            activeClassName="text-green-700 font-medium"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className="text-gray-600 hover:text-green-700 transition-colors"
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