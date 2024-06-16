import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faLanguage,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/muncak-logo.svg";

export default function NavbarAuth() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Icons for theme and language */}
            <FontAwesomeIcon
              icon={faLanguage}
              className="text-darkText cursor-pointer"
              size="2x"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                size="2x"
              />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white">
            <div className="flex flex-col space-y-4 py-4 items-center">
              <Link to="/" className="text-lightText">
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
