import React from "react";
import { MdStarRate, MdDelete, MdEdit } from "react-icons/md";
import Comment from "./Comment";

const Ratings = () => {
  return (
    <div>
      <div className="rate-section ">
        <div className="d-flex">
          <h3>Ratings </h3>
          <span>
            <p> 3.0</p> <MdStarRate />
          </span>
          <p>(0 rate)</p>
        </div>
        <div className="d-flex">
          <h6>Ziad mohammad</h6>
          <span>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </span>
        </div>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="3"
          className="form-control"
          placeholder="Add comment"
        ></textarea>
        <button className="btn btn-dark">Submit</button>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Ratings;
