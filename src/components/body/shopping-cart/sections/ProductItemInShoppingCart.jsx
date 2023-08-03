import React from "react";
import { MdDelete } from "react-icons/md";
import img from "../../../../images/item.png";

const ProductItemInShoppingCart = () => {
  return (
    <>
      <div className="ShoppingItemCard">
        <div className=" itemImage-InfoItem">
          <div className="itemImage">
            <img src={img} alt="" />
          </div>
          <div className="InfoItem">
            <p>Kitchen things</p>
            <h6>
              Kitchen <span>⭐ 3.2</span>
            </h6>
            <p className="d-flex">
              Brand : <h5> HP </h5>
            </p>
            <div className="color"></div>
            <div className="row-Quantity">
              <p>Quantity :</p>
              <input type="number" placeholder="1" value={1} />
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
        <div className="d-grid deleteItem-totle-price">
          <h5 className="deleteItem">
            <MdDelete />
          </h5>
          <h5 className="totle-price">200 JD</h5>
        </div>
      </div>
    </>
  );
};

export default ProductItemInShoppingCart;
