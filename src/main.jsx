import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { AppProvider } from "./context/ProductContext/ProductContext.jsx";
import { CartContextProvider } from "./context/AddToCart/CartValue.jsx";
import { CheckoutStepProvider } from "./context/CheckoutStep/Step.jsx";

import "/styles/global.css";

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
