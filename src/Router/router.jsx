import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Login } from "../Login";
import { Register } from "../Register";
import Home from "../Pages/Home/Home";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<MainLayout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
