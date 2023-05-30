import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import { Chat, Login, Profile, Register, SellerProfile, Order,ServiceDetailsPage } from "../pages";
import Service from "../pages/Services";
import Home from "../pages/Home";
import Filter from "../pages/Filter";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sellerProfile" element={<SellerProfile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/order" element={<Order />} />
            <Route path="/service" element={<Service />} />
            <Route path="/detailes" element={<ServiceDetailsPage />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
    )
}

export default Router;
