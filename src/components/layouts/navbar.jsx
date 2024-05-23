/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLanguage, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing icons including hamburger and close icons
import logo from '../../assets/muncak.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {/* Icons for theme and language */}
                        <FontAwesomeIcon icon={faMoon} className="text-black cursor-pointer" size="2x" />
                        <FontAwesomeIcon icon={faLanguage} className="text-black cursor-pointer" size="2x" />
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="2x" />
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-4 py-4">
                            <Link to="/" className="text-black">Home</Link>
                            {/* Add more links as needed */}
                            <FontAwesomeIcon icon={faMoon} className="text-black cursor-pointer" size="2x" />
                            <FontAwesomeIcon icon={faLanguage} className="text-black cursor-pointer" size="2x" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
