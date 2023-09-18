import Maincarousel from '../components/Carousel/Maincarousel'
import ProductsList from '../components/products-list/ProductsList'
import { FrequentBuys } from '../components/products-list/FrequentBuys'
import { useEffect } from 'react'

const Homepage = () => {
  useEffect(()=>{
    document.title = 'Home | Classic Cuts'
  },[])
  return (
    <div>
      <Maincarousel />
      <ProductsList/>
      <FrequentBuys/>
    </div>
  )
}

export default Homepage
