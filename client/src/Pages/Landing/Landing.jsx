import { Link } from "react-router-dom"
import './landing.css'
import BigImg from '../../assets/img/bigbackground.png'

const Landing = () => {
  return (
    <div className="landing-background">
       <div>
        <img src={BigImg} className="big-img" alt="" />
        <div className="title-box">
          <h5>Got three ingredients on hand? <br></br> We will recommend a dish to make!</h5>
          <Link to='/home'><button className="button">Search recipies</button></Link>
          </div>
       </div>
    </div>
  )
}

export default Landing