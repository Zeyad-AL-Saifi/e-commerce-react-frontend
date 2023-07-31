import React from "react";
import { FaRegHeart } from "react-icons/fa";
import image from "../../../images/clothe.png";
import "./ProductsCard.css";
import { useNavigate } from "react-router-dom";
const ProductsCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/DetailsProduct");
  };
  return (
    <>
      <div className="product-card card" onClick={handleClick}>
        <img src={image} alt="" />
        <FaRegHeart />
        <p>iphone 13 pro max mhave multi colore best color is blue</p>
        <div className="rate-price d-flex">
          <div className="rate">5.4⭐</div>
          <div className="price">800JD</div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
