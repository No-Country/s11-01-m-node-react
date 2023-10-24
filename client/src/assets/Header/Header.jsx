import Logo from "../img/logo3.png";
import "./header.css";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";

const Header = () => {
  const location= useLocation()
  return (
    location.pathname=== '/' || location.pathname === '/login' && isMobileOnly ? (null):(
    <div className="header-backgound">
      <Link to="/">
        <img src={Logo} className="logo" alt="" />
      </Link>
     
      {location.pathname === '/'? 
       <Link to='/login' ><button className="login-button">Login</button></Link>:
       <Link> <Icon icon="mdi:account-outline" className="icon" /> </Link>}
     
    </div>
    )
  );
};

export default Header;
