import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/muncak-logo.svg";

export default function NavbarLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="MunCak Logo" className="h-10 w-auto" />
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
          </div>
          <div className="hidden md:flex items-center space-x-4">
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
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-darkText">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white w-full py-4 space-y-4">
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#home"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </a>
            <Link
              to="/login"
              className="btn-rounded btn text-white bg-darkText border border-white rounded-lg font-light w-full text-center"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn-rounded btn bg-white border border-darkText rounded-lg text-darkText font-light w-full text-center"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
