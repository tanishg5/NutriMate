import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supplements } from "../assets/supplements";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Setcartitems } from "../components/Redux/CartSlice";
import { setCompareItems } from "../components/Redux/CompareSlice";
function Product() {
  //toast.configure();
  const { productId } = useParams();
  const [products, setProducts] = useState({});
  const [active, setActive] = useState("description");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    Object.values(supplements.categories).forEach((arr) => {
      arr.forEach((item) => {
        if (item.id === productId) {
          setProducts(item);
          setCategory(arr);
        }
      });
    });
  }, [productId]);
  const handleAddToCart = () => {
    dispatch(Setcartitems(products));
    toast.success("Added to cart!");
  };
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-green-600 transition-colors">
          Home
        </a>
        <FaArrowRight className="mx-2 text-xs" />
        <a href="/shop" className="hover:text-green-600 transition-colors">
          Shop
        </a>
        <FaArrowRight className="mx-2 text-xs" />
        <span className="font-medium text-gray-800">{products.name}</span>
      </div>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-full max-h-[500px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
            HOT OFFERS
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {products.name}
          </h1>
          <p className="text-gray-600">{products.brand}</p>

          {/* Star Rating */}
          <div className="flex items-center">
            <div
              className="flex"
              aria-label={`Rating: ${products.rating} out of 5`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  {star <= Math.round(products.rating) ? (
                    <span className="text-yellow-400" aria-hidden="true">
                      ★
                    </span>
                  ) : (
                    <span className="text-gray-300" aria-hidden="true">
                      ★
                    </span>
                  )}
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {products.rating}/5
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600">
            ₹{products.price?.toLocaleString("en-IN")}
          </p>

          <p className="text-gray-700">{products.description}</p>

          {/* Nutrition Facts */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Nutrition Facts
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {products.nutrition &&
                Object.entries(products.nutrition).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-1 border-b border-gray-100"
                  >
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg mt-4 transition-colors"
          >
            ADD TO CART
          </button>
          <button
            onClick={() => {
              dispatch(setCompareItems(products));
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg mt-4 transition-colors"
          >
            ADD TO COMPARE
          </button>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mb-12">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActive("description")}
            className={`py-3 px-6 font-medium ${
              active === "description"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActive("review")}
            className={`py-3 px-6 font-medium ${
              active === "review"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews
          </button>
        </div>

        <div className="py-6">
          {active === "description" ? (
            <p className="text-gray-700">
              At NutriMate, we believe that better health begins with better
              choices—and we're here to make those choices smarter, simpler, and
              more personalized. Our platform combines high-quality nutritional
              supplements with intelligent recommendations tailored to your
              fitness goals, dietary preferences, and lifestyle needs. Whether
              you're an athlete pushing for peak performance, someone beginning
              their fitness journey, or simply aiming to maintain everyday
              wellness, NutriMate offers a curated range of products to support
              your goals.
            </p>
          ) : (
            <p className="text-gray-700">No reviews yet</p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {category.slice(0, 5).map(
            (item) =>
              item.id !== productId && (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
                >
                  <div className="relative pb-[100%]">
                    <img
                      onClick={() => navigate(`/product/${item.id}`)}
                      src={item.image}
                      alt={item.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 text-sm truncate">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-green-600 font-bold">
                        ₹{item.price?.toLocaleString("en-IN")}
                      </p>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 text-xs mr-1" />
                        <span className="text-xs text-gray-600">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
