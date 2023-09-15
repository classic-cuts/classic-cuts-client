import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/products/Products";
import Cart from "./components/cart/Cart";

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  
  return null;
}
const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage/>} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
};

export default App;
