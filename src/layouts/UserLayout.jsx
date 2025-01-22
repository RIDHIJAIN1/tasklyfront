import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../includes/default/Navbar";
import Footer from "../includes/default/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
        <main>
            <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
