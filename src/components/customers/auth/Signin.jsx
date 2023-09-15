import { Grid, TextField, Button, InputLabel, FormControl, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submit
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
          <Button className="ml-5" size="small" onClick={() => navigate("/")}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
