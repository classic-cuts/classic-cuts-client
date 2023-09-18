import { createContext, useState } from "react";

export const CheckoutStepContext = createContext(null);

export const CheckoutStepProvider = (props) => {
  const [stepValue, setStepValue] = useState(0);
  return (
    <CheckoutStepContext.Provider value={{ stepValue, setStepValue }}>
      {props.children}
    </CheckoutStepContext.Provider>
  );
};
