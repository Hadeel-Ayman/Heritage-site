import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import Login from "./../pages/Login/index";
import Register from "./../pages/Register/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
