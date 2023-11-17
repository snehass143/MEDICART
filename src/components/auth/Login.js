import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setuser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom"

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    username: username,
    password: password,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSignUpClick = () => {
  //   navigate("/Register");
  // };

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/storeapi/login", user)
      .then((response) => {
        const user = {
          username: username,
          token: response.data.token,
        };
        console.log("Token:", user.token);
        dispatch(setuser(user));
        navigate("/app");
      })
      .catch(() => {
        alert("Login failed. Please check your credentials.");
      });
  };

  const handleGoToRoot = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8 mx-auto bg-light rounded">
          <h1 className="mt-3 mb-4 text-center">Login</h1>
          <label>Username:</label>
          <input
            value={username}
            className="form-control"
            type="text"
            onChange={(event) => setusername(event.target.value)}
          />
          <label className="mt-3">Password:</label>
          <input
            value={password}
            className="form-control mb-4"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="btn btn-info mb-4 mx-auto d-block"
            onClick={handleLogin}
          >
            Login Now
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          {/* <h6>Don't have an account? Sign up now</h6> */}
          {/* <button
            className="btn btn-success mt-1"
            onClick={handleSignUpClick}
          >
            Sign up
          </button> */}
          
          <button
            className="btn btn-primary mt-3"
            onClick={handleGoToRoot}
          >
            Medicine List Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
