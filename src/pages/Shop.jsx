import React from "react";
import { supplements } from "../assets/supplements";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import FilterSidebar from "../components/FilterSidebar";
import { useSelector } from "react-redux";

function Shop() {
  const navigate = useNavigate();

  // matching your initialState capital keys
const category = useSelector(state => state.filters.Category);
const brand = useSelector(state => state.filters.Brand);
const min = useSelector(state => state.filters.Min);
const max = useSelector(state => state.filters.Max);
const rating = useSelector(state => state.filters.Rating);
const sortby = useSelector(state => state.filters.SortBy);


  // flatten supplements
  const allSupplements = Object.entries(supplements.categories).flatMap(
    ([categoryName, items]) =>
      items.map(item => ({ ...item, category: categoryName }))
  );

  // apply filters
  const filteredData = allSupplements.filter(item =>
    (category ? item.category === category : true) &&
    (brand ? item.brand === brand : true) &&
    (min ? item.price >= min : true) &&
    (max ? item.price <= max : true) &&
    (rating ? item.rating >= rating : true)
  );
     if(sortby === 'Price Low to High') {
        filteredData.sort((a,b)=>a.price-b.price)
     }
      if(sortby === 'Price High to Low') {
        filteredData.sort((a,b)=>b.price-a.price)
     }
  return (
    <section className="flex max-w-7xl mx-auto gap-4">
      <FilterSidebar />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredData.map(item => (
          <div
            key={item.id}
            className="border rounded shadow hover:shadow-md transition p-2"
          >
            <img
              src={item.image}
              alt={item.name}
              onClick={() => navigate(`/product/${item.id}`)}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>
            <p>{item.brand}</p>
            <p className="flex items-center text-yellow-500">
              <FaStar className="mr-1" /> {item.rating}
            </p>
          </div>
        ))}
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No products match your filters.
          </p>
        )}
      </div>
    </section>
  );
}

export default Shop;
