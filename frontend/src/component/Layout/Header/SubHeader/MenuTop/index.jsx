import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
const MenuTop = () => {
    return (
        <div className={`settings-menu top`}>
            <div className="setting-menu-inner">
                <div className="setting-links">
                    <Link to="/dashboard">Home</Link>
                </div>
                <div className="setting-links">
                    <Link to="/">Profile</Link>
                </div>
                <div className="setting-links">
                    <Link to="/">Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default MenuTop