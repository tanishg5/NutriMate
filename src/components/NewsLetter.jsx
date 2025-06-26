import React from "react";
import heroo from '../assets/heroo.jpg';

function NewsLetter() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroo} 
          alt="Healthy lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Wellness Community</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to get exclusive offers, nutrition tips, and updates on new products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button 
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </div>
        
        <p className="text-sm mt-4 text-gray-200">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

export default NewsLetter;