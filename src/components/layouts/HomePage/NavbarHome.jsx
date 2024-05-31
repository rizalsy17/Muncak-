import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineGTranslate } from "react-icons/md";
import logo from "../../../assets/muncak-logo.svg";
import { logout } from "../../../services/firebase/auth";

export default function NavbarHome() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white p-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#"
            >
              Home
            </a>
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#"
            >
              My Plan
            </a>
            <a
              className="text-lightText hover:text-darkText font-light"
              href="#"
            >
              Add Plan
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MdOutlineGTranslate />
            <Link
              onClick={handleLogout}
              className="btn-rounded btn bg-white border border-darkText rounded-lg text-darkText font-light"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
