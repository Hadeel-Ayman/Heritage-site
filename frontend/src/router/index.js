import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import { Login, Register } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default Router;
