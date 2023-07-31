import React from "react";
import "./ProductPageComponent.css";
import CategoriseBar from "./sections/categorybar/CategoriseBar";
import FilterAndProduct from "./sections/FilterAndProduct/FilterAndProduct";
import Pagination from "../../../public-component/pagination/Pagination";
import SortSection from "./sections/categorybar/sortSection";

const ProductPageComponent = () => {
  return (
    <>
      <CategoriseBar />
      <SortSection />
      <FilterAndProduct />
      <Pagination />
    </>
  );
};

export default ProductPageComponent;
