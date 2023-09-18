import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Grid } from "@mui/material";
import HorizontalLinearStepper from "./Stepper";
import { CheckoutStepContext } from "../../context/CheckoutStep/Step";

function ShippingDetailsForm({ onNext }) {
  const newCheckoutStepContext = useContext(CheckoutStepContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    newCheckoutStepContext.setStepValue(newCheckoutStepContext.stepValue + 1);
    onNext(formData);
  };

  return (
    <form onSubmit={handleNext} className="form-no-outline m-3">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="Address Line 1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="Address Line 2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <TextField
              fullWidth
              label="ZIP Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            className="bg-[#9155FD] w-full"
            type="submit"
            variant="contained"
            size="large"
            sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

function PaymentDetailsForm({ onPlaceOrder }) {
  const newCheckoutStepContext = useContext(CheckoutStepContext);

  const [formData, setFormData] = useState({
    paymentMethod: "creditCard",
    cardNumber: "",
    upiId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    newCheckoutStepContext.setStepValue(newCheckoutStepContext.stepValue + 1);
    onPlaceOrder(formData);
  };

  return (
    <form onSubmit={handlePlaceOrder} className="form-no-outline">
      <div className="mb-4">
        <label className="block font-medium mb-2">Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="creditCard">Credit Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      {formData.paymentMethod === "creditCard" ? (
        <div className="mb-4">
          <TextField
            fullWidth
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="mb-4">
          <TextField
            fullWidth
            label="UPI ID"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <div className="mb-4 flex justify-center">
        <Button variant="contained" color="primary" type="submit">
          Place Order
        </Button>
      </div>
    </form>
  );
}

function CheckoutForm() {
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
      <h2 className="font-bold text-center mt-3 text-[20px] font-titlefont">
        Checkout Page
      </h2>
      <HorizontalLinearStepper step={newCheckoutStepContext.stepValue} />
      {orderPlaced ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Placed!</h2>
          <p>Thank you for your order. Here are your order details:</p>
          {/* <pre className="bg-gray-100 p-4 mt-4">
            {JSON.stringify({ ...shippingDetails }, null, 2)}
          </pre> */}
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
