import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const cart = useSelector(state => state.cart.cartitems);
  
  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>
      <div className="w-20 h-1 bg-green-600 mb-8"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City/State</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Mumbai, Maharashtra"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="400001"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">Your Order</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Product</span>
              <span className="text-gray-600">Total</span>
            </div>
            
            {cart.map(item => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name} × {item.quantity || 1}</span>
                <span>₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Subtotal ({totalItems} items)</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
            
            <div className="flex justify-between pt-2">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">₹{subtotal.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className={`w-full py-3 rounded-md mt-8 font-medium transition ${
              cart.length === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
            disabled={cart.length === 0}
          >
            {cart.length === 0 ? 'Cart is Empty' : 'Place Order'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;