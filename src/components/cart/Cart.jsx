import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const Cart = () => {
  const [addItem, setAddItem] = useState(1);

  const DecreaseItem = () => {
    setAddItem(addItem - 1);
  };

  const IncreaseItem = () => {
    setAddItem(addItem + 1);
  };

  return (
    <div className="flex gap-4 py-5 px-2">
      <div className="w-[70%] border-[2px] px-4 min-w-screen min-h-screen bg-gray-50 py-5">
        {/* Your cart title */}
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
              <div className="px-3 md:w-full lg:pr-10">
                {/* DIV OF AN ITEM */}
                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="flex justify-end">
                    <IconButton aria-label="fingerprint" >
                      <DeleteIcon size="small" />
                    </IconButton>
                  </div>
                  <div className="w-full flex items-center">
                    {/* IMAGE OF THE PRODUCT */}
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>

                    {/* NAME OF THE PRODUCT */}
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-gray-600">
                        Ray Ban Sunglasses.
                      </h6>

                      {/* QUANTITY OF PRDUCTS */}
                      <div className="py-2">
                        <button onClick={DecreaseItem} disabled={addItem === 1}>
                          <RemoveIcon fontSize="small" />
                        </button>
                        <span className="border-2 pl-2 pr-2 border-x-black border-y-stone-500">
                          {addItem}
                        </span>
                        <button onClick={IncreaseItem}>
                          <AddIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600 text-xl">
                        $210.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price details */}
      <div className="px-10 py-3">
        <div className="fixed">
          <div className="mb-4 pb-6 border-b font-semibold border-gray-200  text-[#878787] text-xl">
            PRICE DETAILS
          </div>

          {/* SUBTOAL TAXES AND GST */}
          <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
            <div className="w-full flex mb-3 items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Subtotal</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">$190.91</span>
              </div>
            </div>
            <div className="w-full mb-3 flex items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Taxes (GST)</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">$19.09</span>
              </div>
            </div>
            <div className="w-full flex mb-3 items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Shipping</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">$5.00</span>
              </div>
            </div>
          </div>

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
                <span className="font-semibold">$210.00</span>
              </div>
            </div>
          </div>
          {/* CHECKOUT BUTTON */}
          <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> PAY @210.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
