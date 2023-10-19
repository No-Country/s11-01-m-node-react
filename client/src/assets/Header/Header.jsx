import Logo from "../img/logo3.png";
import "./header.css";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";

const Header = () => {
  const location= useLocation()
  return (
    location.pathname=== '/' && isMobileOnly ? (null):(
    <div className="header-backgound">
      <Link to="/">
        <img src={Logo} className="logo" alt="" />
      </Link>
      <Link>
      {location.pathname === '/'? <button className="login-button">Login</button>:
        <Icon icon="mdi:account-outline" className="icon" />}
      </Link>
    </div>
    )
  );
};

export default Header;
