import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { TotalPriceContext } from "../../context/CartTotalPrice/CartTotalPrice";

const CartItem = (props) => {
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const [addItem, setAddItem] = useState(1);

  const DecreaseItem = () => {
    if (addItem === 1) {
      return; // Don't allow quantity to go below 1
    }
    setAddItem(addItem - 1);
    setTotalPrice(totalPrice - props.price);
  };

  const IncreaseItem = () => {
    setAddItem(addItem + 1);
    setTotalPrice(totalPrice + props.price);
  };

  return (
    <div className="w-full text-gray-800 mx-auto font-light mb-6 border-b bg-gray-50 border-gray-200 p-6 shadow-md">
      <div className="flex justify-end">
        <IconButton aria-label="delete">
          <DeleteIcon size="small" />
        </IconButton>
      </div>
      <div className="w-full flex items-center">
        {/* IMAGE OF THE PRODUCT */}
        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
          <img src={props.image} alt="" />
        </div>

        {/* NAME OF THE PRODUCT */}
        <div className="flex-grow pl-3">
          <h6 className="font-semibold uppercase text-gray-600">
            {props.name}
          </h6>

          {/* QUANTITY OF PRODUCTS */}
          <div className="py-2">
            <button onClick={DecreaseItem} disabled={addItem === 1}>
              <RemoveIcon fontSize="small" />
            </button>
            <span className="border-[1.5px] pl-1 pr-2 rounded-sm border-x-black border-y-stone-500">
              {addItem}
            </span>
            <button onClick={IncreaseItem}>
              <AddIcon fontSize="small" />
            </button>
          </div>
        </div>
        <div>
          <span className="font-semibold text-gray-600 text-xl">
            ${addItem * props.price}.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
