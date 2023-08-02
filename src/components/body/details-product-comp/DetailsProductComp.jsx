import React from "react";
import CategoriseBar from "../sub-home-component/products-page-component/sections/categorybar/CategoriseBar";
import "./DetailsProductComp.css";
import ProductInfo from "./sections/ProductInfo";
import Ratings from "./sections/Ratings";
import ProductSimilar from "./sections/ProductSimilar";
const DetailsProductComp = () => {
  return (
    <div className="container">
      <CategoriseBar />
      <ProductInfo />
      <Ratings />
      <ProductSimilar />
    </div>
  );
};

export default DetailsProductComp;
