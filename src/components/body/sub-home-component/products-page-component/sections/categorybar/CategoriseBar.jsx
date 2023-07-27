import React from "react";
import "./CategoriseBar.css";
import { FaSortAmountDownAlt } from "react-icons/fa";

const CategoriseBar = () => {
  return (
    <div className="categorise-type">
      <ul>
        <li>Children</li>
        <li>computer</li>
        <li>skin</li>
        <li>tools</li>
        <li>home things</li>
        <li>More</li>
      </ul>
      <div>
        <div className="d-flex justify-content-between p-3 m-5">
          <h2>There are 12 products</h2>
          <h4>
            Sort by <FaSortAmountDownAlt />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CategoriseBar;
