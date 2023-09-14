import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to handle form submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Passowrd"
              fullWidth
              autoComplete="password"
            />
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
          <p>Dont have an account?</p>
          <Button className="ml-5" size="small" onClick={() => navigate("/")}>
            register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
