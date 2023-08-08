import React from "react";
import {
  MdLocationCity,
  MdOutlineFavorite,
  MdOutlineVerifiedUser,
  MdShop,
  MdAdminPanelSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";
const AdminSidebar = () => {
  return (
    <div>
      <div className="side-bar">
        <div className="side-bar-items">
          <Link to={"/Admin/OrdersManager"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Orders Manager
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/ProductManager"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Product Manager
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/AddBrand"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings /> Add Brand
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/AddCategory"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Add Category
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/AddSubCategory"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Add Subcategory
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/AddCoupon"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Add Coupon
            </div>
          </Link>
          <hr />
          <Link to={"/Admin/AddProduct"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdAdminPanelSettings />
              Add Product
            </div>
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
