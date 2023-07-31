import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TrendingHotels from "../components/TrendingHotels"
import TrendingBrands from '../components/TrendingBrands'
import AvailableHotels from '../components/AvailableHotels'
import Testimonies from '../components/Testimonies'
import Footer from '../components/Footer'

const LandingPage =()=>  {
  return (
    <div>
        <Navbar/>
        <Hero />
        <TrendingHotels />
        <TrendingBrands />
        <AvailableHotels />
        <Testimonies />
        <Footer />
    </div>
  )
}

export default LandingPage