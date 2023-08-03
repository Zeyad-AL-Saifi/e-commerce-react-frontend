import React from "react";
import ProductItemInShoppingCart from "./ProductItemInShoppingCart";

const ListItemInShoppingCart = () => {
  return (
    <>
      <div className="d-grid container">
        <ProductItemInShoppingCart />
        <hr />
        <ProductItemInShoppingCart />
        <hr />
        <ProductItemInShoppingCart />
        <hr />
        <ProductItemInShoppingCart />
      </div>
    </>
  );
};

export default ListItemInShoppingCart;
