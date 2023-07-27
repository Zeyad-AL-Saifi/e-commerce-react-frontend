import React from "react";
import laptops from "../../../../images//laptops.png";
import "./LocalAd.css";
const LocalAd = () => {
  return (
    <div className="local-ad container">
      <img src={laptops} alt="" />
      <p>Categorise up to 30% for any laptop </p>
    </div>
  );
};

export default LocalAd;
