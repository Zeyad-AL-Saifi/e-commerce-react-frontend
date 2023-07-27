import React from "react";
import image from "../../../../images/clothe.png";
import "./Categorise.css";
import { useNavigate } from "react-router-dom";

import Compo from "../../../public-component/compo/Compo";
const Categorise = () => {
  const navigator = useNavigate();
  const handleNavigator = () => {
    navigator("/CategorisePage");
  };
  return (
    <Compo text={"Categories"} handleNavigator={handleNavigator}>
      <div className="d-flex Categorise-container row  ">
        <div className="col">
          <img src={image} alt="" className="Categorise-image " />
          <p>Categorise</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="Categorise-image" />
          <p>Categorise</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="Categorise-image" />
          <p>Categorise</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="Categorise-image" />
          <p>Categorise</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="Categorise-image" />
          <p>Categorise</p>
        </div>
        <div className="col">
          <img src={image} alt="" className="Categorise-image" />
          <p>Categorise</p>
        </div>
      </div>
    </Compo>
  );
};

export default Categorise;
