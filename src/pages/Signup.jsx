import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CodeIcon from "@mui/icons-material/Code";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import image from "../images/login_header.jpg";
import { signup } from "../api/auth"; // Adjust the import path as necessary
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
    const { login } = useAuth();

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to handle error/success messages
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
       
      };
      const response = await signup(userData);
      const role = response.user.role === "admin" ? "admin" : "user"; // Check for specific role
      console.log(response.user)
      console.log("This is role")
      console.log(role)
      toast.success("User registered successfully");
      login(response.token, role);
      if (role === "admin") navigate("/admin/dashboard");
      navigate("/user/dashboard");
    } catch (error) {
      toast.error("Complete all the required fields");
    }
  };

  return (
    <div
      className="my-16 mx-20 rounded-lg overflow-hidden"
      style={{ backgroundColor: "#043B64" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen rounded-lg shadow-lg">
        {/* Left Image Section */}
        <div className="hidden md:block w-[580px] h-full">
          <div className="h-full flex m-10">
            <img
              src={image}
              alt="Signup Visual"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        {/* Right Form Section */}
        <div
          className="w-full md:w-3/5 text-white py-6 px-8 md:px-16"
          style={{ backgroundColor: "#043B64" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Sign up</h2>
         
          {message && <p className="text-red-500 text-center">{message}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1">First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2 pr-10 rounded bg-white text-black focus:outline-none"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <PersonIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1">Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2 pr-10 rounded bg-white text-black focus:outline-none"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <PersonIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 pr-10 rounded bg-white text-black focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
                <EmailIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
              </div>
            </div>
          
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 pr-10 rounded bg-white text-black focus:outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
                <LockIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-2 pr-10 rounded bg-white text-black focus:outline-none"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <LockIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
              </div>
            </div>
            {/* Terms and Conditions */}
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm">
                I agree to the <span>Terms and Conditions</span> and{" "}
                <span>Privacy Policy</span>.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-1/2 py-1 bg-transparent border-white border-2 bg-black hover:border-black hover:bg-white hover:text-black rounded-sm text-white font-bold"
              >
                Register
              </button>
              <Link
                to="/login"
                className="text-center w-1/2 py-1 bg-transparent border-white border-2 hover:border-black hover:bg-white hover:text-black rounded-sm text-white font-bold"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
