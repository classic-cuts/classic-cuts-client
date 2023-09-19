import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import HorizontalLinearStepper from "./Stepper";
import { CheckoutStepContext } from "../../context/CheckoutStep/Step";
import { PaymentDetailsForm } from "./PaymentDetailsForm";
import { ShippingDetailsForm } from "./ShippingDetailsForm";

function CheckoutForm() {
  useEffect(() => {
    document.title = "Checkout | Classic Cuts";
    newCheckoutStepContext.setStepValue(0);
  }, []);

  const [shippingDetails, setShippingDetails] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const newCheckoutStepContext = useContext(CheckoutStepContext);

  const handleShippingDetailsNext = (data) => {
    setShippingDetails(data);
  };

  const handlePlaceOrder = (paymentDetails) => {
    // Here, you can send both shippingDetails and paymentDetails to your backend for order processing
    // In a real application, you'd have a more complex order processing logic.
    setOrderPlaced(true);
  };

  return (
    <div className="md:w-1/2 sm:w-3/4 mx-auto mt-8 rounded-[6px] border border-black mb-10 p-2">
      <h2 className="font-bold text-center mt-3 text-[20px] font-titlefont mb-2">
        Checkout Page
      </h2>
      <HorizontalLinearStepper step={newCheckoutStepContext.stepValue} />
      {orderPlaced ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 mt-4">Order Placed!</h2>
          <p>Thank you for your order.</p>

          <div className="mt-4">
            <Link to="/">
              <Button variant="contained">Continue shopping</Button>
            </Link>
          </div>
        </div>
      ) : !shippingDetails ? (
        <ShippingDetailsForm onNext={handleShippingDetailsNext} />
      ) : (
        <PaymentDetailsForm onPlaceOrder={handlePlaceOrder} />
      )}
    </div>
  );
}

export default CheckoutForm;
