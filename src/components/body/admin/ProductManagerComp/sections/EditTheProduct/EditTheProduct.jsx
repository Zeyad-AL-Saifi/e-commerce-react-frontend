import React from "react";

import "./EditTheProduct.css";
import img from "../../../../../../images/item.png";
import ColorCircle from "../../../../../public-component/color-circle/ColorCircle";
const EditTheProduct = () => {
  return (
    <>
      <div className="container product-edit-container">
        <h2>Edit the Product - T-shart</h2>
        <p> Product Images</p>
        <div className="product-image">
          <img src={img} alt="" />
          <div className="delete-image"> ❌</div>
          <img src={img} alt="" />
          <div className="delete-image"> ❌</div>
          <img src={img} alt="" />
          <div className="delete-image"> ❌</div>
          <img src={img} alt="" />
          <div className="delete-image"> ❌</div>
        </div>
        <input type="text" value={"T - shart"} className="form-control" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-control"
        ></textarea>
        <input type="number" className="form-control" value={600} />
        <input
          type="text"
          className="form-control"
          value={"the price after the discound"}
        />
        <input type="number" className="form-control" value={600} />
        <input type="text" className="form-control" value={"categry"} />
        <input type="text" className="form-control" value={"Subcategry"} />
        <input type="text" className="form-control" value={"Brand"} />

        <div className="color-product">
          <ColorCircle />
        </div>
        <button className="btn btn-dark"> Submit </button>
      </div>
    </>
  );
};

export default EditTheProduct;
