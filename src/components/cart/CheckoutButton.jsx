import React from "react";
import { Link } from "react-router-dom";

const CheckoutButton = (props) => {
  return (
    <div>
      <Link to="/checkout">
        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
          <i className="mdi mdi-lock-outline mr-1"></i> {props.message}
        </button>
      </Link>
    </div>
  );
};

export default CheckoutButton;
