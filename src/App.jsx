import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import ProductsList from "./components/products-list/ProductsList";
import { FrequentBuys } from "./components/products-list/FrequentBuys";

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
        </Routes>
      </Router>
      <ProductsList/>
      <FrequentBuys/>
      <Footer />
    </div>
  );
};

export default App;
