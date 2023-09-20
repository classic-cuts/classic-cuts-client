import { useContext } from "react";
import { TotalPriceContext } from "../../context/CartTotalPrice/CartTotalPrice";

const PriceBreakdown = () => {
  const { totalPrice } = useContext(TotalPriceContext);
  const taxes = totalPrice * 0.1;
  const shippingCharges = totalPrice > 100 ? 0 : 5;

  return (
    <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
      <div className="w-full flex mb-3 items-center">
        <div className="flex-grow">
          <span className="text-gray-600">Subtotal</span>
        </div>
        <div className="pl-3">
          <span className="font-semibold">${totalPrice}</span>
        </div>
      </div>
      <div className="w-full mb-3 flex items-center">
        <div className="flex-grow">
          <span className="text-gray-600">Taxes (GST)</span>
        </div>
        <div className="pl-3">
          <span className="font-semibold">${taxes}</span>
        </div>
      </div>
      <div className="w-full flex mb-3 items-center">
        <div className="flex-grow">
          <span className="text-gray-600">Shipping</span>
        </div>
        <div className="pl-3">
          <span className="font-semibold">
            {shippingCharges ? "$" + shippingCharges : "-FREE"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
