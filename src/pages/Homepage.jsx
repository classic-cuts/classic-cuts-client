import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Maincarousel from '../components/Carousel/Maincarousel'

const Homepage = () => {
  return (
    <div>
      <Navbar headline="Get free delivery on orders over $100"/>
      <Maincarousel />
    </div>
  )
}

export default Homepage
