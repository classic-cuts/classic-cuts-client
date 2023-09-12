import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = ()=> {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App