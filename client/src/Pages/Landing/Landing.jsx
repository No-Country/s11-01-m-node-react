import { Link } from "react-router-dom";
import "./landing.css";
import BigImg from "../../assets/img/bigBook.png";
import MobileImg from "../../assets/img/Book.png";
import { isMobileOnly } from "react-device-detect";
import Logo from "../../assets/img/logoW.png";

const Landing = () => {
  return (
    <div className="landing-background">
      <div>
        {isMobileOnly
          ? (<><div className="logo-back"><img src={Logo} className="logo-landing" alt="" /></div>
          <img src={MobileImg} className="big-img"/>
            </>)
          : (<img src={BigImg} className="big-img" alt="" />)}
        <div className="title-box">
      
          <Link to="/home">
            <button className="button">SEARCH RECIPES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
