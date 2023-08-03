import React from "react";
import { MdDelete } from "react-icons/md";
import img from "../../../../../images/item.png";

const MyOrders = () => {
  return (
    <>
      <div className="MyOrders d-grid">
        <h4>Order Number #78 In 2032/12/5</h4>
        <div className="MyOrders-itemImage-InfoItem">
          <div className="itemImage">
            <img src={img} alt="" />
          </div>
          <div className="InfoItem">
            <p>Kitchen things</p>
            <h6>
              Kitchen <span>⭐ 3.2</span>
            </h6>
            <div className="row-Quantity">
              <p>Quantity :</p>
              <input type="number" placeholder="1" value={1} />
              <div className="color"></div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <h5>Delivery : True</h5>
        </div>
        <div className="d-flex">
          <h5>Payment : True</h5>
        </div>
        <div className="d-flex">
          <h5>Payment Way : visa</h5>
        </div>
        <h5 className="">Price: 200 JD</h5>
      </div>
    </>
  );
};

export default MyOrders;
