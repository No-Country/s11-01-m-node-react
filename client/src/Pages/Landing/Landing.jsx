import { Link } from "react-router-dom"
import './landing.css'


const Landing = () => {
  return (
    <div className="landing-background">
        <h1>Landing</h1>
        <Link to='/home'>Home</Link>
        <br></br>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Landing