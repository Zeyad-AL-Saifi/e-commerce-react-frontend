import React from "react";
import image from "../../../../images/clothe.png";
import "./CategorisePageComponent.css";
const CategorisePageComponent = () => {
  return (
    <>
      <div className="all-categorise">
        <p className="title">All Categorise :</p>
        <div className="row container m-2 p-2">
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
          <div className="col">
            <img src={image} alt="" className="Categorise-image " />
            <p>Categorise</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorisePageComponent;
