import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import image from "../images/login_header.jpg"; // Replace with your actual image path
import { loginRequest } from "../api/auth"; // Adjust the import path as necessary
import { toast } from "react-toastify";
import { useAuth } from '../utils/AuthContext';


const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
      };
      const response = await loginRequest(userData);
      const role = response.user.role === "admin" ? "admin" : "user"; 
      console.log(response.token, role);
      toast.success("User logged in successfully");
      login(response.token, role);
      if (role === "admin") navigate("/admin/dashboard");
      else navigate("/user/dashboard");
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-24 bg-[#043B64]  rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="hidden md:block">
            <img
              src={image} // Replace with your actual image
              alt="Person working on a laptop"
              className="rounded-lg"
            />
          </div>

          {/* Right Column - Login Form */}
          <div className="text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
            <p className="mb-6 text-center">
              Fill in your credentials and click on the Login button
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <BiMessageSquareDetail
                    size={24}
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <IoEyeOutline
                    size={24}
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a href="#" className="text-sm hover:text-gray-300">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="bg-white text-black px-12 py-2 rounded hover:bg-[#043B64]"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-sm mt-4">
                Don’t have an account?{" "}
                <Link to="/signup" className="font-bold hover:text-gray-300">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
