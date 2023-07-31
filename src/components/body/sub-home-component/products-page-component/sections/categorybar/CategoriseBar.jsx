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
    </div>
  );
};

export default CategoriseBar;
