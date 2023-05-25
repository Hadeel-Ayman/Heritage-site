import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import { Chat, Login, Profile, Register, SellerProfile,Order } from "../pages";
import Service from "../pages/Services";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sellerProfile" element={<SellerProfile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/order" element={<Order />} />
            <Route path="/service" element={<Service/>}/>
        </Routes>
    );
};

export default Router;
