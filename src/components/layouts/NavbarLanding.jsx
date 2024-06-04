import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/muncak-logo.svg";

export default function NavbarLanding() {
  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#about"
            >
              About
            </a>
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="btn-rounded btn text-white bg-darkText border border-white rounded-lg font-light"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn-rounded btn bg-white border border-darkText rounded-lg text-darkText font-light"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
