import { useState } from "react";
import { loginUser } from "../../store/actions/loginUserAction";
import { useDispatch } from "react-redux";
import Logo from "../../assets/img/logo3.png";
import { Link } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import "./login.css";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const dates = { ...state, [name]: value };
    setState(dates);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(state));

    setState({
      email: "",
      password: "",
    });

    
  };

  return (
    <>
    <div className="login-background">
      {isMobileOnly?  
      <Link to="/">
        <img src={Logo} className="logo-login" alt="" />
      </Link>: null}
      <div className="input-box">
    <h2>Log in</h2>
    <form onSubmit={handleOnsubmit}>
    <div className="input-single">
      <label className="label">Email</label>
      <input
      className="inputs"
        onChange={handleOnChange}
        type="email"
        name="email"
        value={state.email}
        placeholder="usename@email.com"
        required
      />
      </div>
      <div className="input-single">
      <label className="label">Password</label>
      <input 
      className="inputs"
        onChange={handleOnChange}
        value={state.password} 
        name="password"
        type="password"
        placeholder="type your password"
        required
     />
     <p className="input-extra-text">Forgot your password?</p>
     </div>
        <Link to='/home'>
      <button type="submit" className="login-button">LOG IN</button>
      </Link>
      
    </form>
    
    </div>
    <p className="input-extra-text">Don&apos;t have an account?<span className="span"> Sign up</span></p>
    </div>
    </>
  );
}

export default Login;
