import React from "react";
import AdminSidebar from "../../components/body/admin/sideBar/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <div className="row">
        <div className="col col-lg-4 col-md-5 col-xl-3">
          <AdminSidebar />
        </div>
        <div className="col col-lg-8 col-md-7 col-xl-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
