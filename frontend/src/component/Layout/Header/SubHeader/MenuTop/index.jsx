import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const MenuTop = () => {
        </div>
        <div className="setting-links">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="setting-links">
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuTop;
