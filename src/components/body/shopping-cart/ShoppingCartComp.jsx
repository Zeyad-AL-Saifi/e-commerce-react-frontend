import React from "react";
import "./ShoppingCartComp.css";
import ListItemInShoppingCart from "./sections/ListItemInShoppingCart";
const ShoppingCartComp = () => {
  return (
    <>
      <div className="container">
        <h2>Shopping Cart</h2>

        <div className="row">
          <div className="col-8">
            <ListItemInShoppingCart />
          </div>
          <div className="discound-code col-3 d-grid">
            <div className="d-flex">
              <input
                placeholder="Discound Code"
                type="text"
                className="form-control"
              />
              <button className="btn btn-dark m-0 ">Apply</button>
            </div>
            <input
              placeholder="200 JD"
              type="text"
              className="form-control mt-2 text-align-center
              "
              disabled={true}
            />
            <button className="btn btn-dark">Payment</button>
            <button className="btn btn-dark">Clean the Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartComp;
