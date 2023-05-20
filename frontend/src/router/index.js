import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import { Login, Profile, Register } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default Router;
