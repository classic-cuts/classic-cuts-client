import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useLocation } from "react-router";


const AuthForm = ({ handleClose, open }) => {
  const location = useLocation();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='authPopup'>
          {location.pathname === "/login" ? <SignIn /> : <SignUp />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthForm;
