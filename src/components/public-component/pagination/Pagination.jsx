import React from "react";
import "./Pagination.css";
const Pagination = () => {
  return (
    <>
      <div className="pagination-section">
        <button className="btn btn-primary">next </button>
        <button className="btn btn-danger">1 </button>
        <button className="btn btn btn-outline-secondary">2 </button>
        <button className="btn btn-primary">prev </button>
      </div>
    </>
  );
};

export default Pagination;
