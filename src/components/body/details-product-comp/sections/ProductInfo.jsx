import React from "react";
import img from "../../../../images/item.png";
import ColorCircle from "../../../public-component/color-circle/ColorCircle";

const ProductInfo = () => {
  return (
    <div className="product-info-img row">
      <div className="col-3 container-image ">
        <img src={img} alt="" className="product-img" />
      </div>
      <div className="col-6 product-info">
        <p>Kitchin thing:</p>
        <h6>Kitchin</h6>
        <p className="d-flex">
          Brand : <h5>HP</h5>
        </p>
        <ColorCircle />
        <p>Quantity: 12 pieces</p>
        <p>Description:</p>
        <h5>
          DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
        </h5>
        <div className="add-price">
          <button disabled="true" className="btn btn-light">
            200JD
          </button>
          <button className="btn btn-dark">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
