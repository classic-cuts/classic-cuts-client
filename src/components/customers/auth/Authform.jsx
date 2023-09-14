import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { useLocation } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: 2,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

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
        <Box sx={style}>
          {location.pathname === "/login" ? <SignIn /> : <SignUp />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthForm;
