import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../includes/admin/Sidebar";

const Admin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="bg-[#043B64] flex-1 p-6  fixed left-[18rem] overflow-y-auto min-h-[100vh] h-full" style={{ width: "calc(100% - 18rem)" }}>
        <div className="bg-white rounded-3xl">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
