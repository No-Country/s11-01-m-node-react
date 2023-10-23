import "./footer.css"
import Logo from '../img/logo3.png'
const Footer = () => {
  return (
    <div className="footer-background">
        <img src={Logo} alt="" />
        <p>| Home | Create Posts | Favorites | My Profile | <br></br>| Privacy Policy | Terms of Service | </p>
        <p>© 2023 Cooking, All rights reserved.</p>
    </div>
  )
}

export default Footer