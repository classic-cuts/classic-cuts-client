import { useEffect } from 'react'

import Maincarousel from '../components/carousel/MainCarousel'
import FeatureProducts from '../components/feature-products/FeatureProducts'
import { FrequentBuys } from '../components/feature-products/FrequentBuys'

const Homepage = () => {
  useEffect(()=>{
    document.title = 'Home | Classic Cuts'
  },[])
  return (
    <div>
      <Maincarousel />
      <FeatureProducts/>
      <FrequentBuys/>
    </div>
  )
}

export default Homepage
