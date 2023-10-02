import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthForm from "../customers/auth/Authform";

const SignInComponent = () => {
  const [openAuthModal, setOpenAuthModel] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwt_decode(token);
      const username = decodedToken.name;
      setUsername(username);
    } else {
      setUsername("");
    }
  }, [username]);

  const handleClose = () => {
    setOpenAuthModel(false);
  };

  const openModal = () => {
    setOpenAuthModel(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername(""); 
  };

  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      {username ? (
        <div className="relative group" onClick={toggleDropdown}>
          <div className="rounded-full bg-indigo-500 text-white h-8 w-8 flex items-center justify-center text-sm font-medium">
            {username.charAt(0).toUpperCase()}
          </div>
          {showDropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
          onClick={openModal}
        >
          Sign up
        </button>
      )}
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <button className="text-sm font-medium text-gray-700 hover:text-gray-800">
        <Link to="/create-product">Become a seller</Link>
      </button>

      {/* //modal for signup and login */}
      <AuthForm handleClose={handleClose} open={openAuthModal} />
    </div>
  );
};

export default SignInComponent;
