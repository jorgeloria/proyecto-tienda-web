import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/Layout.css"

const Layout = () => {
  return (
    <div className="lt-body">
      <Navbar />

      <main>
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
