import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./login-form";

export const Login = () => {
  return (
    <Container>
      <Box>
        <Typography textAlign={"center"} variant="h3">
          Login
        </Typography>
        <Box width={"500px"} marginX={"auto"}>
          <LoginForm />
        </Box>
        <Typography textAlign={"center"} variant="h6">
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </Container>
  );
};


