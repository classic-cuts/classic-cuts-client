import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/ContactUs";
import CheckoutPage from "./pages/CheckoutPage";
import NewArrivals from "./pages/NewArrivals";

import Footer from "./components/footer/Footer";
import ProductPage from "./components/product/ProductPage";
import Navbar from "./components/Navbar/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar headline="Get free delivery on orders over $100" />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
};

export default App;
