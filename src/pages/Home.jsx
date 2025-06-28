import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import NewArrival from '../components/NewArrival'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Hero/>
    <Categories/>
    <NewArrival/>
    <NewsLetter/>
   {/* // <Footer/> */}
    </>
  )
}

export default Home