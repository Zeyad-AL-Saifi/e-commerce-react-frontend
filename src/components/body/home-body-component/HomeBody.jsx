import React from "react";
import Slider from "./slider-image/Slider";
import Discount from "./discount/Discount";
import BestSeller from "./best-seller/BestSeller";
import LocalAd from "./LocalAd/LocalAd";
import LatestClothes from "./latest-clothes/LatestClothes";
import Brand from "./Brand/Brand";
const HomeBody = () => {
  return (
    <div>
      <Slider />
      <Discount />
      <BestSeller />
      <LocalAd />
      <LatestClothes />
      <Brand />
    </div>
  );
};

export default HomeBody;
