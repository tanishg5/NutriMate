import React from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recommended from "./pages/Recommended"
import Compare from "./pages/Compare"
function App() {
  return (
    <>
    <Navbar/>
       <Routes>
         <Route path="/" element= { <Home/> }></Route>
         <Route path="/shop" element= { <Shop/> }></Route>
         <Route path="/recommended" element= { <Recommended/> }></Route>
         <Route path="/compare" element= { <Compare/> }></Route>
         <Route path="/about-us" element= { <AboutUs/> }></Route>
         <Route path="/contact" element= { <ContactUs/> }></Route>
         <Route path="/cart" element= { <Cart/> }></Route>
      {/* //   <Route path = "/product" element={<Product/>}/> */}
         <Route path="/product/:productId" element={<Product/>}/>
         <Route path = "/checkout" element={<Checkout/>}></Route>
       </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
       <Footer/>
    </>
  )
}

export default App
