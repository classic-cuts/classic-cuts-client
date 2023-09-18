import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/styles/global.css";
import { AppProvider } from "./context/AddToCart/AddToCart.jsx";
import { CartContextProvider } from "./context/AddToCart/CartValue.jsx";
import { CheckoutStepProvider } from "./context/CheckoutStep/Step.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <CheckoutStepProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </CheckoutStepProvider>
    </CartContextProvider>
  </React.StrictMode>
);
