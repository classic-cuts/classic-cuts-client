import Maincarousel from '../components/Carousel/Maincarousel'
import ProductsList from '../components/products-list/ProductsList'
import { FrequentBuys } from '../components/products-list/FrequentBuys'

const Homepage = () => {
  return (
    <div>
      <Maincarousel />
      <ProductsList/>
      <FrequentBuys/>
    </div>
  )
}

export default Homepage
