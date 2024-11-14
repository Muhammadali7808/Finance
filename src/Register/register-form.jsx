import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Container, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useRegisterUser } from "../service/mutation/useRegisterUser";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isLoading, isError, error } = useRegisterUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    reset();
    mutate(data, {
      onSuccess: () => {
        toast.success("Registration successful!");
        navigate("/");
      },
      onError: () => {
        toast.error("Registration failed, please try again.");
      },
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form
        style={{ width: "500px", padding: "20px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="Email"
          type="email"
          {...register("email", { required: true })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: true })}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </form>
      {isError && <Typography color="error">Error: {error.message}</Typography>}
    </Container>
  );
};

export default RegisterForm;
