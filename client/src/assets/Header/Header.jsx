import Logo from "../img/logo3.png";
import "./header.css";
import { Link } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import MobileHeader from "./MobileHeader";

const Header = () => {
 
  return (
    isMobileOnly ? (<MobileHeader />):(
    <div className="header-backgound">
      <Link to="/" className="logo-link">
        <img src={Logo} className="logo" alt="" />
      </Link>
     <Link to='/home' className="header-link">Home</Link>
     <Link className="header-link">Add Posts</Link>
    <Link className="header-link">Favorites</Link> 
    <Link to='/login' className="header-link-special">Log in</Link>
    </div>
    )
  );
};

export default Header;
