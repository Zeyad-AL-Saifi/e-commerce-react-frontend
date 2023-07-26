import React from "react";
import Compo from "../../../public-component/compo/Compo";
import phone from "../../../../images/item.png";
import { FaRegHeart } from "react-icons/fa";

import "./LatestClothes.css";
const LatestClothes = () => {
  return (
    <>
      <Compo text={"Latest Clothes"}>
        <div className="best-seller-container">
          <div className="best-seller-card card">
            <img src={phone} alt="" />
            <FaRegHeart />

            <p>iphone 13 pro max mhave multi colore best color is blue</p>
            <div className="rate-price d-flex">
              <div className="rate">5.4⭐</div>
              <div className="price">800JD</div>
            </div>
          </div>
          <div className="best-seller-card card">
            <img src={phone} alt="" />
            <FaRegHeart />
            <p>iphone 13 pro max mhave multi colore best color is blue</p>
            <div className="rate-price">
              <div className="rate">5.4⭐</div>
              <div className="price">800JD</div>
            </div>
          </div>
          <div className="best-seller-card card">
            <img src={phone} alt="" />
            <FaRegHeart />
            <p>iphone 13 pro max mhave multi colore best color is blue</p>
            <div className="rate-price d-flex">
              <div className="rate">5.4⭐</div>
              <div className="price">800JD</div>
            </div>
          </div>
          <div className="best-seller-card card">
            <img src={phone} alt="" />
            <FaRegHeart />
            <p>iphone 13 pro max mhave multi colore best color is blue</p>
            <div className="rate-price d-flex">
              <div className="rate">5.4⭐</div>
              <div className="price">800JD</div>
            </div>
          </div>
        </div>
      </Compo>
    </>
  );
};

export default LatestClothes;
