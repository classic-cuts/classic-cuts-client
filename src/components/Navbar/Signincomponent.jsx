import { useState } from "react";

import AuthForm from "../customers/auth/AuthForm";
// import Signup from "../customers/auth/Signup";

const SignInComponent = () => {
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
        Sign up
      </button>
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <button className="text-sm font-medium text-gray-700 hover:text-gray-800">
        Become a seller
      </button>

      {/* //modal for signup and login */}
      <AuthForm handleClose={handleClose} open={openAuthModal} />
    </div>
  );
};

export default SignInComponent;
