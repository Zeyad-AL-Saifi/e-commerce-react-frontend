import React from "react";

import "./ProductsManage.css";
import ProductManageCard from "./sections/ProductManageCard";
import Pagination from "../../../public-component/pagination/Pagination";
const ProductsManage = () => {
  return (
    <>
      <h2>Manage all products</h2>
      <div className="ProductManageCard-Container">
        <ProductManageCard />
        <ProductManageCard />
        <ProductManageCard />
        <ProductManageCard />
        <ProductManageCard />
        <ProductManageCard />
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default ProductsManage;
