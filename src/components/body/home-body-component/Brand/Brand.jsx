import React from "react";
import Compo from "../../../public-component/compo/Compo";
import brand1 from "../../../../images/brand1.png";
import brand2 from "../../../../images/brand2.png";
import brand3 from "../../../../images/brand3.png";

import "./Brand.css";
const Brand = () => {
  return (
    <>
      <Compo text={"Brands"}>
        <div className="best-seller-container container">
          <div className="best-seller-card card">
            <img src={brand1} alt="" />
          </div>
          <div className="best-seller-card card">
            <img src={brand2} alt="" />
          </div>
          <div className="best-seller-card card">
            <img src={brand3} alt="" />
          </div>
          <div className="best-seller-card card">
            <img src={brand1} alt="" />
          </div>
          <div className="best-seller-card card">
            <img src={brand2} alt="" />
          </div>
          <div className="best-seller-card card">
            <img src={brand3} alt="" />
          </div>
        </div>
      </Compo>
    </>
  );
};

export default Brand;
