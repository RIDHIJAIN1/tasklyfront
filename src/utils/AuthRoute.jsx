import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const AuthRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const location = useLocation();

    // Check if user is authenticated
    if (token) {
        // Redirect unauthenticated users to login
        if (role == 'admin') {
            return <Navigate to="/admin/dashboard" replace />;
        }
        return <Navigate to="/user/dashboard" replace />;
    }

    // If all checks pass, render the children (unprotected routes)
    return <Outlet />;
};

export default AuthRoute;
