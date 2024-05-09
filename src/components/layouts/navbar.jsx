// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Mengimpor ikon dari Font Awesome
import { faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons'; // Mengimpor ikon matahari, bulan, dan bahasa
import logo from '../../assets/muncak.png';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full shadow-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {/* Icon untuk mengatur mode tema */}
                      <FontAwesomeIcon icon={faMoon} className="text-black cursor-pointer" size="2x" />
                    {/* Icon untuk mengatur bahasa */}
                    <FontAwesomeIcon icon={faLanguage} className="text-black cursor-pointer" size="2x" />
                    </div>
                </div>
            </div>
        </div>
    );
}
