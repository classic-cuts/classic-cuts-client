/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

const AuthForm = ({ handleClose, open }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {open && <div className="authPopupOverlay" />}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="authPopup">
          {isSignUp ? (
            <SignUp toggleForm={toggleForm} />
          ) : (
            <SignIn toggleForm={toggleForm} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthForm;
