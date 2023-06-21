import "./style.scss";

//components
import About from "./About/index";
import Avatar from "./Avatar/index";
import Experience from "./Experience/index";
import Education from "./Education";
import { Outlet, Route } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="left">
        <Avatar />
      </div>
      <div className="right">
        {/* <Outlet /> */}
        <About />
        <div className="information">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Profile;
