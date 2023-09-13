import React, { useState } from "react";
import Signin from "../customers/auth/Signin";
import Authform from "../customers/auth/Authform";
// import Signup from "../customers/auth/Signup";

const Signincomponent = () => {
  const [openAuthModal, setOpenAuthModel] = useState(false);

  const handleClose = () => {
    setOpenAuthModel(false);
  };

  const openModal = () => {
    setOpenAuthModel(true);
  };
  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <button
        className="text-sm font-medium text-gray-700 hover:text-gray-800"
        onClick={openModal}
      >
        Sign in
      </button>
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <button className="text-sm font-medium text-gray-700 hover:text-gray-800">
        Become a seller
      </button>

      {/* //modal for signup and login */}
      <Authform handleClose={handleClose} open={openAuthModal} />
    </div>
  );
};

export default Signincomponent;
