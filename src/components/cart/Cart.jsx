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
    <div className="flex flex-col md:flex-row py-5 px-2 gap-2 bg-[#F1F3F6]">
      <div className="w-full md:w-[70%] px-4 py-5">
        {/* Your cart headline */}
        {/* <div className="px-5">
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
              Your cart.
            </h1>
          </div>
        </div> */}

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

      {/* Price details */}
      <div className="w-full md:w-[30%]">
        <div className="mt-5 px-4 md:px-10 bg-gray-50 py-3 overflow-hidden max-h-[300px] shadow-md ">
          <div className="mb-4 pb-6 border-b font-semibold border-gray-200 text-[#878787] text-xl">
            PRICE DETAILS
          </div>

          {/* SUBTOAL TAXES AND GST */}
          <PriceBreakdown />

          {/* TOTAL AMOUNT */}
          <div className="pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
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
          <CheckoutButton message="Place order" />
        </div>

        {/* Safe ans secure payments logo*/}
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            <div className="">
              <img src="./safe_pay.png" alt="Safe Pay"  className="w-8 h-6" />
            </div>
            <div>
              <h2 className="font-semibold border-gray-200 text-[#656565] text-sm">
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
