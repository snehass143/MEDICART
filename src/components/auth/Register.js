import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  var [username, setname] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [password1, setPassword_confirmation] = useState("");
  var goto = useNavigate();

  function Register() {
    var user = {
      username: username,
      email: email,
      password: password,
      password1: password1,
    };

    axios
      .post('http://127.0.0.1:8000/storeapi/register', user)
      .then(() => {
        goto('/');
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please check your inputs and try again.");
      });
  }

  return (
    <div className="">
      <div className="row">
        <div className="col bg-light rounded pt-5 pb-3 col-lg-4 col-md-3 col-sm-6 mx-auto input2">
        <h1 className="mt-3 mb-4 text-center">Sign Up</h1>

          <input
            placeholder="name"
            type="text"
            value={username}
            className="form-control mt-4"
            onInput={(event) => setname(event.target.value)}
          />

          <input
            placeholder="email"
            type="email"
            value={email}
            className="form-control mt-3"
            onInput={(event) => setEmail(event.target.value)}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            className="form-control mt-3"
            onInput={(event) => setPassword(event.target.value)}
          />

          <input
            placeholder="confirmation password"
            type="password"
            value={password1}
            className="form-control mt-3"
            onInput={(event) => setPassword_confirmation(event.target.value)}
          />
          <br></br>
          <button className="btn btn-info mx-auto d-block" onClick={Register}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;