import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Container, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useLoginUser } from "../service/mutation/useLoginGet";
// import { loadState } from "../config/store";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { mutate, isLoading, isError, error } = useLoginUser();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        reset();
        mutate(data, {
            onSuccess: () => {
                toast.success("Login successful!");
                console.log(true);
                navigate("/home");
            },
            onError: () => {
                toast.error("Login failed, please try again.");
            },
        });
    };

    return (
        <Container>
            <form
                style={{ width: "500px", padding: "20px" }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    {...register("email")}
                    margin="normal"
                />
                <TextField
                    sx={{ marginTop: "10px", marginBottom: "20px" }}
                    fullWidth
                    label="Password"
                    type="password"
                    {...register("password")}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </Button>
            </form>
            {isError && <Typography color="error">Error: {error.message}</Typography>}
        </Container>
    );
};

export default LoginForm;
