import React from "react";

import "./Information.css";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
const Information = () => {
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
          <div className="col-2  modif">
            <div className="edit">Edit</div>
            <div className="delete">
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
