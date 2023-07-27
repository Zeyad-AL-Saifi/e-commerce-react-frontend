import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <form>
          <label>
            <h1>Login</h1>
          </label>
          <br />
          <input
            type="email"
            className="w-100 form-control"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            className="w-100 form-control"
            placeholder="Password"
          />
          <br />
          <button type="button" className="btn btn-dark w-100 ">
            Submit
          </button>
          <br />
          <label>
            Don't you have account ?
            <Link to={"/SignupPage"} style={{ textDecoration: "none" }}>
              <span style={{ color: "red" }}> Click Here</span>
            </Link>
          </label>
          <br />
          <label>Forget Password</label>
        </form>
      </div>
    </>
  );
};

export default Login;
