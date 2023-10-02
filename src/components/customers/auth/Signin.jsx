/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Grid,
  Button,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle form submit
    const loginData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const responseData = await response.json();

      if (response.ok) {
        const token = responseData.token;
        localStorage.setItem("token", token);
        toast.success("Logged in successfully")
        toast
        setEmail("");
        setPassword("");
      }else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error(responseData.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-no-outline">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                required
                id="email"
                name="email"
                type="email"
                label="Email"
                fullWidth
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Don't have an account?</p>
          <Button className="ml-5" size="small" onClick={toggleForm}>
            Register
          </Button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
