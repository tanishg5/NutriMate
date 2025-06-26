import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-2">🌿NutriMate</h2>
          <p className="text-sm">
            Your AI-powered companion for smart supplement choices. Personalized for your health, goals, and lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Explore Store</a></li>
            <li><a href="#" className="hover:underline">AI Recommendation</a></li>
            <li><a href="#" className="hover:underline">Compare</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-4 text-green-600 text-xl">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-800">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-800">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-800">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-800">
          <FaTwitter />
        </a>
        <a href="mailto:support@nutrimate.com" className="hover:text-green-800">
          <MdEmail />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NutriMate. All rights reserved.
      </div>
    </footer>
  );
}
