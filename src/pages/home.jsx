// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/muncak.png';
import mounImage from '../assets/bro.png';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full shadow-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a className="text-black font-normal" href="#">Home</a>
                        <a className="text-black font-normal" href="#">About</a>
                        <a className="text-black font-normal" href="#">Contact</a>
                    </div>
                    <div className="flex items-center space-x-4">
                    <Link to="/login" className="btn-rounded btn text-white bg-black border border-white rounded-lg font-normal">Login</Link>
                        <Link to="/register" className="btn-rounded btn btn-black border border-white rounded-lg font-normal">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="flex justify-center items-center mx-auto h-screen">
        <div className="container mx-auto px-4">
        <div className="flex flex-col items-center ml-20">
        <div className="text-left">
        <p className="font-poppins font-medium text-xl mb-2">Selamat Datang di Muncak!</p>
        <h1 className="my-2 font-bold leading-tight m-0">Jelajahi Gunung,</h1>
        <h1 className="my-2 font-bold leading-tight m-0">Raih Muncak,</h1>
        <h1 className="my-2 leading-tight m-0">
            <span className="font-bold">Bersama</span> <span className="font-bold border-b-8 border-red-500">MunCak!</span>
        </h1>
        <button className="btn-rounded btn text-white bg-[#FF3131] w-48 rounded-lg font-normal mt-4 shadow-xl">Klik untuk memulai</button>
    </div>
   
</div>

        </div>
        {/* Right Col */}
        <div className="hidden md:flex ml-auto">
    <img className="w-full md:w-3/5" src={mounImage} alt="Hero Image"/>
</div>

    </div>
    
        
    );
};


const Home = () => {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    );
};

export default Home;
