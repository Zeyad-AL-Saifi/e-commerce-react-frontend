import React from "react";
import Compo from "../../../public-component/compo/Compo";

import "./BestSeller.css";
import { useNavigate } from "react-router-dom";
import ProductsCard from "../../../public-component/cards/ProductsCard";
const BestSeller = () => {
  const navigator = useNavigate();
  const handleNavigator = () => {
    navigator("/ProductPage");
  };
  return (
    <>
      <Compo text={"Best Seller"} handleNavigator={handleNavigator}>
        <div className="best-seller-container">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </Compo>
    </>
  );
};

export default BestSeller;
