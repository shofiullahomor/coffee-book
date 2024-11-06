import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function componentName() {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default componentName;
