import Logo from "../img/logo3.png"
import './header.css'
import {Icon}

const Header = () => {
  return (
    <div className="header-backgound">
        <img src={Logo} className="logo" alt="" />
    </div>
  )
}

export default Header