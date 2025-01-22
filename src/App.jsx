import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./utils/AuthContext";
import AuthRoute from "./utils/AuthRoute";
import DefaultLayout from "./layouts/DefaultLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Task from "./pages/Task";
import RoleProtectedRoute from "./utils/RoleProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
            </Route>

            {/* Authentication Routes */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/tasks" element={<Task />} />
                
              </Route>
            </Route>

            {/* User Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/user" element={<UserLayout />}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="tasks" element={<Task />} />
              </Route>
            </Route>

            {/* Admin Protected Routes */}
            <Route element={<RoleProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
