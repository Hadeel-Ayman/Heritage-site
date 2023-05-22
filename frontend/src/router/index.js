import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import { Chat, Login, Profile, Register, SellerProfile } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sellerProfile" element={<SellerProfile />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    );
};

export default Router;
