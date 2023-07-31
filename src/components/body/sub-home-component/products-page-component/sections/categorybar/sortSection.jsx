import React from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";

const SortSection = () => {
  return (
    <div>
      <div className="d-flex justify-content-between p-3 m-5">
        <h2>There are 12 products</h2>
        <h4>
          Sort by <FaSortAmountDownAlt />
        </h4>
      </div>
    </div>
  );
};

export default SortSection;
