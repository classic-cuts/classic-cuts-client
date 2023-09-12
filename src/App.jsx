import { useState } from 'react'
import './App.css'
import Navbar from './components/customers/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar headline="Get free delivery on orders over $100"/>
    </>
  )
}

export default App

