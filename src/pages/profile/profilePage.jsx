import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/body/profile/sideBar/Sidebar";

const ProfilePage = () => {
  return (
    <div className="row">
      <div className="col col-lg-4 col-md-5 col-xl-3">
        <Sidebar />
      </div>
      <div className="col col-lg-8 col-md-7 col-xl-9">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
