import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
function Cart() {
  const cart = useSelector(state => state.cart.cartitems);
  const navigate = useNavigate();
  console.log(cart)
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        <div className="w-20 h-1 bg-green-600 mt-2"></div>
      </div>

      {cart.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <button 
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid gap-8">
          {/* Cart Items */}
          <ul className="space-y-4">
            {cart.map((item ,index) => (
              <li
                key={item.id}
                className="border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-green-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Qty: 1</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Summary Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ₹{cart.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">
                  ₹{cart.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
            </div>
            <button onClick={()=>navigate('/checkout')} className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;