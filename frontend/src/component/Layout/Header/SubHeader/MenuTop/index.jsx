import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
// import { Localhost } from "../../../../../config/api";

// const logout = async () => {
//   const fetchData = await fetch(`${Localhost}/logout`, {
//     method: "DELETE",
//   });
//   const resp = fetchData.json();
//   return resp;
// };

const MenuTop = () => {
  return (
    <div className="settings-menu">
      <div className="setting-links">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="setting-links">
        <Link to="/">Home</Link>
      </div>
      <div className="setting-links">
        <Link to="/seller">Become a seller </Link>
      </div>
      <div className="setting-links">
        {/* Logout */}
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
};

export default MenuTop;
