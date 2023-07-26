import React from "react";
import image from "../../../../images/clothe.png";
import "./Discount.css";
import Compo from "../../../public-component/compo/Compo";
const Discount = () => {
  return (
    <Compo text={"Categories"}>
      <div className="d-flex discount-container row  ">
        <div className="col">
          <img src={image} alt="" className="discount-image " />
          <p>Discount</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="discount-image" />
          <p>Discount</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="discount-image" />
          <p>Discount</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="discount-image" />
          <p>Discount</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="discount-image" />
          <p>Discount</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="discount-image" />
          <p>Discount</p>
        </div>
      </div>
    </Compo>
  );
};

export default Discount;
