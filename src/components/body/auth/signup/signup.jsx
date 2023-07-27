import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <form>
          <label>
            <h1>Create new account</h1>
          </label>
          <br />
          <input
            type="text"
            className="w-100 form-control"
            placeholder="Full name"
          />
          <br />
          <input
            type="email"
            className="w-100 form-control"
            placeholder="Email"
          />
          <br />
          <input
            type="number"
            className="w-100 form-control"
            placeholder="Phone"
          />
          <br />
          <input
            type="password"
            className="w-100 form-control"
            placeholder="password"
          />
          <br />
          <input
            type="password"
            className="w-100 form-control"
            placeholder="Confirm Password"
          />
          <br />
          <button type="button" className="btn btn-dark w-100 ">
            Submit
          </button>
          <br />
          <label>
            Do you have account ?
            <Link to={"/LoginPage"} style={{ textDecoration: "none" }}>
              <span style={{ color: "red" }}> Click Here</span>
            </Link>
          </label>
        </form>
      </div>
    </>
  );
};

export default Signup;
