import Logo from "../img/logo3.png";
import "./header.css";
import { Icon } from "@iconify/react"; 
import { Link, useLocation } from "react-router-dom";

const MobileHeader = () => {
    const location= useLocation()
  return (
    location.pathname === '/' ? (null): (
         <div className="header-backgound">
     <Link> <Icon icon="mdi:menu" className="icon" /> </Link>
      <Link to="/" >
        <img src={Logo} className="logo" alt="" />
      </Link>
      <Link to='/login'> <Icon icon="mdi:account-outline" className="icon" /> </Link>
    </div>)
  )
}

export default MobileHeader