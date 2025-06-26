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
function App() {
  return (
    <>
    <Navbar/>
       <Routes>
         <Route path="/" element= { <Home/> }></Route>
         <Route path="/shop" element= { <Shop/> }></Route>
         <Route path="/about-us" element= { <AboutUs/> }></Route>
         <Route path="/contact" element= { <ContactUs/> }></Route>
         <Route path="/cart" element= { <Cart/> }></Route>
         <Route path = "/product" element={<Product/>}/>
         <Route path="/product/:productId" element={<Product/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
