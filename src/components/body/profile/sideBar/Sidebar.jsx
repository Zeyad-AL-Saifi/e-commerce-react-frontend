import React from "react";
import {
  MdLocationCity,
  MdOutlineFavorite,
  MdOutlineVerifiedUser,
  MdShop,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="side-bar">
        <div className="side-bar-items">
          <Link to={"/Profile/ProfileInfo"} style={{ textDecoration: "none" }}>
            <div className="item">
              <MdOutlineVerifiedUser />
              Profile Information
            </div>
          </Link>
          <hr />
          <Link
            to={"/Profile/ProfileManageOrder"}
            style={{ textDecoration: "none" }}
          >
            <div className="item">
              <MdShop />
              Order Manage
            </div>
          </Link>
          <hr />
          <Link
            to={"/Profile/ProfileFavorite"}
            style={{ textDecoration: "none" }}
          >
            <div className="item">
              <MdOutlineFavorite /> Favorite
            </div>
          </Link>
          <hr />
          <Link
            to={"/Profile/ProfileAddress"}
            style={{ textDecoration: "none" }}
          >
            <div className="item">
              <MdLocationCity />
              Addresses
            </div>
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
