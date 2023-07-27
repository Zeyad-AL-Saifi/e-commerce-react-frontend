import React from "react";
import Slider from "./slider-image/Slider";
import BestSeller from "./best-seller/BestSeller";
import LocalAd from "./LocalAd/LocalAd";
import LatestClothes from "./latest-clothes/LatestClothes";
import Brand from "./Brand/Brand";
import Categorise from "./Categorise/Categorise";
const HomeBody = () => {
  return (
    <div>
      <Slider />
      <Categorise />
      <BestSeller />
      <LocalAd />
      <LatestClothes />
      <Brand />
    </div>
  );
};

export default HomeBody;
