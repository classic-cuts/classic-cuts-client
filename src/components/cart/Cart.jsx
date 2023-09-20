import { useContext, useEffect } from "react";
import CartProducts from "./CartProducts";
import CartItem from "./CartItem";
import { TotalPriceContext } from "../../context/CartTotalPrice/CartTotalPrice";
import CheckoutButton from "./CheckoutButton";
import PriceBreakdown from "./PriceBreakdown";

const Cart = () => {
  const { totalPrice } = useContext(TotalPriceContext);

  useEffect(() => {
    document.title = "Shopping Cart | Classic Cuts";
  }, []);

  const taxes = totalPrice * 0.1;
  const shippingCharges = totalPrice > 100 ? 0 : 5;
  const payableAmount = totalPrice + taxes + shippingCharges;

  return (
    <div className="flex gap-4 py-5 px-2">
      <div className="w-[70%] border px-4 min-w-screen min-h-screen bg-gray-50 py-5">
        {/* Your cart headline */}
        <div className="px-5">
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
              Your cart.
            </h1>
          </div>
        </div>

        <div className="w-full border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="overflow-y-auto max-h-[60vh] px-3 md:w-full lg:pr-10">
                {/* DIV OF AN ITEM */}
                {CartProducts.map((cart_item) => (
                  <CartItem
                    key={cart_item.id}
                    name={cart_item.name}
                    image={cart_item.image}
                    price={cart_item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price details */}
      <div className="px-10 py-3w-full">
        <div className="fixed">
          <div className="mb-4 pb-6 border-b font-semibold border-gray-200  text-[#878787] text-xl">
            PRICE DETAILS
          </div>

          {/* SUBTOAL TAXES AND GST */}
          <PriceBreakdown />

          {/* DISCOUNT CODE */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="-mx-2 flex items-end justify-end">
              <div className="flex-grow px-2 lg:max-w-xs">
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Discount code
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="XXXXXX"
                    type="text"
                  />
                </div>
              </div>
              <div className="px-2">
                <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          {/* TOTAL AMOUNT */}
          <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
            <div className="w-full flex items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Total</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">{payableAmount}</span>
              </div>
            </div>
          </div>
          {/* CHECKOUT BUTTON */}
          <CheckoutButton message="Proceed to checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
