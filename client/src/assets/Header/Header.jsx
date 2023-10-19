import Logo from "../img/logo3.png";
import "./header.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-backgound">
      <Link to="/">
        <img src={Logo} className="logo" alt="" />
      </Link>
      <Link>
        <Icon icon="mdi:account-outline" className="icon" />
      </Link>
    </div>
  );
};

export default Header;
