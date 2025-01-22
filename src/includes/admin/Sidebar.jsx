import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { toast } from "react-toastify";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Admin logged out successfully");
  };

  return (
    <div className="bg-[#043B64] text-white w-72 h-screen flex flex-col fixed">
      <div className="flex items-center justify-center h-20 bg-[#043B64]">
        <h1 className="text-4xl font-bold">
          TASKLY<span className="text-yellow-400">+</span>
        </h1>
      </div>
      <nav className="flex flex-col mt-4">
        <hr className="bg-white m-1"></hr>
        <a
          href="/admin/dashboard"
          className="font-bold text-lg transition duration-300"
        >
          <div className="py-3 pl-4 bg-white text-black">
          User List
          </div>
        </a>
        <hr className="bg-white m-1"></hr>
        <a
          href="/user/tasks"
          className="py-3 px-4 font-bold text-lg transition duration-300"
        >
          Task List
        </a>
       
        <hr className="bg-white m-1"></hr>
        <button
          type="button"
          onClick={handleLogout}
          className="py-3 px-4 font-bold text-lg duration-300 flex justify-center items-center gap-3"
        >
          
          <IoMdExit className="text-white" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
