import Navbar from '../components/Navbar/Navbar'
import Maincarousel from '../components/Carousel/Maincarousel'
import ProductsList from '../components/products-list/ProductsList'
import { FrequentBuys } from '../components/products-list/FrequentBuys'

const Homepage = () => {
  return (
    <div>
      <Navbar headline="Get free delivery on orders over $100"/>
      <Maincarousel />
      <ProductsList/>
      <FrequentBuys/>
    </div>
  )
}

export default Homepage
