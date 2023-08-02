import React from "react";
import { MdDelete, MdEdit, MdStarRate } from "react-icons/md";

const Comment = () => {
  return (
    <>
      <div className="comment">
        <hr />
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h6>Ziad mohammad </h6>
            <span>
              <p> 3.0</p>
              <MdStarRate />
            </span>
          </div>
          <div>
            <MdDelete />
            <MdEdit />
          </div>
        </div>

        <p>CommentCommentCommentCommentCommentComment</p>

        <hr />
      </div>
    </>
  );
};

export default Comment;
