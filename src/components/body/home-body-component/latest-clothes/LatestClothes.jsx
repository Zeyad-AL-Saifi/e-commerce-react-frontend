import React from "react";
import Compo from "../../../public-component/compo/Compo";

import "./LatestClothes.css";
import ProductsCard from "../../../public-component/cards/ProductsCard";
const LatestClothes = () => {
  return (
    <>
      <Compo text={"Latest Clothes"}>
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

export default LatestClothes;
