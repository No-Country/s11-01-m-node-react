import { useState } from "react";
import { loginUser } from "../../store/actions/loginUserAction";
import { useDispatch } from "react-redux";

function Login() {
  
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch= useDispatch()

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const dates = { ...state, [name]: value };
    setState(dates);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state))
    
    setState({
        email: "",
        password: "",
      });
    
    
  };

  return (
    <form onSubmit={handleOnsubmit}>
      <label>email</label>
      <input
        onChange={handleOnChange}
        type="email"
        name="email"
        value={state.email}
        placeholder="usename@email.com"
        required
      />

      <label>Password</label>
      <input 
        onChange={handleOnChange}
        value={state.password} 
        name="password"
        type="password"
        required
     />

      <input type="submit" />
    </form>
  );
}

export default Login;
