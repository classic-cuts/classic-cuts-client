import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { AppProvider } from "./context/ProductContext/ProductContext.jsx";
import { CheckoutStepProvider } from "./context/CheckoutStep/Step.jsx";

import "/styles/global.css";
import { TotalPriceContextProvider } from "./context/CartTotalPrice/CartTotalPrice.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TotalPriceContextProvider>
        <CheckoutStepProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </CheckoutStepProvider>

    </TotalPriceContextProvider>
  </React.StrictMode>
);
