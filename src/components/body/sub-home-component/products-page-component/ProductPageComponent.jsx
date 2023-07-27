import React from "react";
import "./ProductPageComponent.css";
import CategoriseBar from "./sections/categorybar/CategoriseBar";
import FilterAndProduct from "./sections/FilterAndProduct/FilterAndProduct";
import Pagination from "../../../public-component/pagination/Pagination";

const ProductPageComponent = () => {
  return (
    <>
      <CategoriseBar />
      <FilterAndProduct />
      <Pagination />
    </>
  );
};

export default ProductPageComponent;
