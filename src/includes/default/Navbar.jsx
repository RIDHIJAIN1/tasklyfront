import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../../images/image.png";
import { useAuth } from "../../utils/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isActive = (path) => location.pathname === path;
  const [authStatus, setAuthStatus] = useState(isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("User logged out successfully");
  };

  // Update auth status on component mount
  useEffect(() => {
    setAuthStatus(isAuthenticated);
    const role = localStorage.getItem("role"); // Assuming the role is stored in localStorage
    setUserRole(role);
  }, [isAuthenticated]);

  return (
    <nav className="bg-[#043B64]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo/Heading */}
        <div className="w-52 ml-[54px] font-bold flex  sm:text-2xl md:text-3xl text-white">
         TASKLY
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate("/")}
            className={`${
              isActive("/") ? "bg-white text-black" : "bg-[#043B64] text-white"
            } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
          >
            Home
          </button>
          {userRole === "user" && (
            <button
              onClick={() => navigate("/user/dashboard")}
              className={`${
                isActive("/user/dashboard")
                  ? "bg-white text-black"
                  : "bg-[#043B64] text-white"
              } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
            >
              User
            </button>
          )}
          {userRole === "admin" && (
            <button
              onClick={() => navigate("/admin/dashboard")}
              className={`${
                isActive("/admin/dashboard")
                  ? "bg-white text-black"
                  : "bg-[#043B64] text-white"
              } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
            >
              Admin
            </button>
          )}
          {!authStatus && (
            <button
              onClick={() => navigate("/login")}
              className={`${
                isActive("/login")
                  ? "bg-white text-black"
                  : "bg-[#043B64] text-white"
              } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
            >
              Login
            </button>
          )}
          {authStatus && (
            <button
              onClick={handleLogout}
              className="bg-[#043B64] hover:bg-white hover:text-black text-white border-2 px-8 py-1 font-medium cursor-pointer rounded-sm"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6">
          <Link
            to="/"
            className={`block ${
              isActive("/") ? "bg-white text-black" : "text-white"
            } px-4 py-2 rounded hover:bg-white hover:text-black`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {!authStatus && (
            <Link
              to="/login"
              className={`block ${
                isActive("/login") ? "bg-white text-black" : "text-white"
              } px-4 py-2 rounded hover:bg-white hover:text-black`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
          {authStatus && (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="block text-white px-4 py-2 rounded hover:bg-white hover:text-black"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
