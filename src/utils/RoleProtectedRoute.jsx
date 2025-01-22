import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RoleProtectedRoute = ({ requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Check if the user is authenticated and if they have the correct role
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />; // Redirect non-admins to the home page (or another route)
  }

  // If authenticated and the role matches, render the protected routes
  return <Outlet />;
};

export default RoleProtectedRoute;
