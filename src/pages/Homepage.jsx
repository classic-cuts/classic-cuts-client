import { useEffect } from 'react'

import Maincarousel from '../components/carousel/MainCarousel'
import ProductsList from '../components/products-list/ProductsList'
import { FrequentBuys } from '../components/products-list/FrequentBuys'
import FeatureProduct from '../components/feature-products/FeatureProduct'

const Homepage = () => {
  useEffect(()=>{
    document.title = 'Home | Classic Cuts'
  },[])
  return (
    <div>
      <Maincarousel />
      <FeatureProduct/>
      <ProductsList/>
      <FrequentBuys/>
    </div>
  )
}

export default Homepage
