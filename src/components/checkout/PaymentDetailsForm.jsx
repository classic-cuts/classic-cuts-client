import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CheckoutStepContext } from "../../context/CheckoutStep/Step";
import ValidateCard from "./Helpers/validateCard";

export function PaymentDetailsForm({ onPlaceOrder }) {
  const [validationError, setValidationError] = useState(null);

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

    if (name === "cardNumber") {
      const isValid = ValidateCard(value);
      if (!isValid) {
        setValidationError("Invalid card number. Please check and try again.");
      } else {
        setValidationError(null); // Clear the error if the card number is valid
      }
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!ValidateCard(formData.cardNumber)) {
      setValidationError("Invalid card number");
      return;
    }
    newCheckoutStepContext.setStepValue(newCheckoutStepContext.stepValue + 1);
    onPlaceOrder(formData);
  };

  return (
    <form onSubmit={handlePlaceOrder} className="form-no-outline">
      <div className="mb-4">
        <label className="block font-medium ml-0 m-3">Payment Method</label>
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
            error={!!validationError} // Set error to true if there's a validation error
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            helperText={validationError || " "} // Use the validation error message, or a space to reserve space
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
      <div className="mb-4 flex justify-between gap-60">
        <Button
          className="bg-[#9155FD] w-full"
          type="submit"
          variant="contained"
          size="large"
          sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
        >
          confirm payment
        </Button>
      </div>
    </form>
  );
}
