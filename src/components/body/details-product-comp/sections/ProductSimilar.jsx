import React from "react";
import ProductsCard from "../../../public-component/cards/ProductsCard";

const ProductSimilar = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </>
  );
};

export default ProductSimilar;
