import React from "react";

import "./ProfileInformation.css";

const ProfileInformation = () => {
  return (
    <>
      <div>
        <h1>Profile Info</h1>
        <div className="row info-container">
          <div className="col-10 info">
            <div className="row">
              <div className="col">Name :</div>
              <div className="col">Zeyad mohammad alsaifi</div>
            </div>
            <div className="row">
              <div className="col">Phone Number :</div>
              <div className="col">0789149148</div>
            </div>
            <div className="row">
              <div className="col">Email :</div>
              <div className="col">zeyad@gmail.com</div>
            </div>
          </div>
          <div className="col-2  ">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
