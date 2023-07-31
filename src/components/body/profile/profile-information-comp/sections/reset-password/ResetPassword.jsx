import React from "react";

import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <>
      <div className="reset-password">
        <h1>Reset Password</h1>
        <form action="">
          <input
            type="password"
            className="w-100 form-control"
            placeholder="Current Password"
          />
          <input
            type="password"
            className="w-100 form-control"
            placeholder="New Password"
          />
          <input
            type="password"
            className="w-100 form-control"
            placeholder="Confirm Password"
          />
          <button type="submit" className="btn btn-dark">
            Save new password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
