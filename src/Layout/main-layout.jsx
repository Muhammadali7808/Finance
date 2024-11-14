import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/store";



export const MainLayout = () => {
  // const user = localStorage.getItem("user");

  // if (!user) {
  //   return <Navigate replace to="/" />;
  // } 
  
  return <Outlet />
  
}
