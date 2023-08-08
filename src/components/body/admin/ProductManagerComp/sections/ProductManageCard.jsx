import React from "react";
import img from "../../../../../images/clothe.png";
import { Link } from "react-router-dom";

const ProductManageCard = () => {
  return (
    <>
      <div className="card productManageCard col ">
        <div className="row">
          <div className="d-flex justify-content-between ">
            <p className="m-2">Delete</p>
            <p className="m-2">
              <Link to={"/Admin/ProductManager/Edit"}>Edit</Link>
            </p>
          </div>
        </div>
        <div className="row">
          <img src={img} alt="" />
        </div>
        <div className="row">
          <h5>T-Shart</h5>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
            <strong>550 JD</strong>
            <p className="text-warning">0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManageCard;
