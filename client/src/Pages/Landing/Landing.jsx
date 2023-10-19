import { Link } from "react-router-dom";
import "./landing.css";
import BigImg from "../../assets/img/bigbackground.png";
import MobileImg from "../../assets/img/background.png";
import { isMobileOnly } from "react-device-detect";
import Logo from "../../assets/img/logo3.png";

const Landing = () => {
  return (
    <div className="landing-background">
      <div>
        {isMobileOnly
          ? (<><img src={Logo} className="logo-landing" alt="" />
          <img src={MobileImg} className="big-img"/>
            </>)
          : (<img src={BigImg} className="big-img" alt="" />)}
        <div className="title-box">
          <h5>
            Got three ingredients on hand? <br /> We will recommend a dish to
            make!
          </h5>
          <Link to="/home">
            <button className="button">Search recipies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
