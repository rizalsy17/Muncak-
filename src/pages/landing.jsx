import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/muncak.png";
import mounImage from "../assets/bro.png";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a className="text-black font-normal" href="#">
              Home
            </a>
            <a className="text-black font-normal" href="#">
              About
            </a>
            <a className="text-black font-normal" href="#">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="btn-rounded btn text-white bg-black border border-white rounded-lg font-normal"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn-rounded btn btn-black border border-white rounded-lg font-normal"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start md:ml-20">
          <div className="text-center md:text-left">
            <p className="font-poppins font-medium text-xl mb-2">
              Selamat Datang di Muncak!
            </p>
            <h1 className="my-2 font-bold leading-tight m-0">
              Jelajahi Gunung,
            </h1>
            <h1 className="my-2 font-bold leading-tight m-0">Raih Muncak,</h1>
            <h1 className="my-2 leading-tight m-0">
              <span className="font-bold">Bersama</span>{" "}
              <span className="font-bold border-b-8 border-red-500">
                MunCak!
              </span>
            </h1>
            <button className="btn-rounded btn text-white bg-[#FF3131] w-48 rounded-lg font-normal mt-4 md:mt-24 shadow-xl">
              Klik untuk memulai
            </button>
          </div>
        </div>
      </div>
      {/* Right Col */}
      <div className="hidden md:flex md:ml-auto w-full md:w-3/5">
        <img className="w-full" src={mounImage} alt="Hero Image" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold">
            <span className="text-red-500">WHO</span> WE ARE
          </p>
        </div>
        <div className="flex justify-center items-center md:justify-start md:items-center w-3/4">
          <p className="text-sm">
            Welcome to MunCak! We are a dedicated team of mountain enthusiasts
            and tech experts committed to making your mountain climbing
            experience safer, easier, and more enjoyable. Our mission is to
            provide a comprehensive platform that assists climbers, from
            beginners to veterans, in planning their trips efficiently.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold">
            <span className="text-red-500">OUR</span> STORY
          </p>
        </div>
        <div className="flex justify-center items-center md:justify-start md:items-center w-3/4">
          <p className="text-sm">
            Born out of a shared passion for mountain climbing and a recognition
            of the challenges faced by climbers, MunCak! was developed by a
            group of friends who wanted to make a difference. We combined our
            expertise in technology and love for adventure to build a platform
            that simplifies and enhances the planning process for climbers.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-bold text-center text-red-500">OUR TEAM</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="rounded p-4 flex flex-col items-center">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>
            <p className="font-semibold">Naresh Pratista</p>
            <p className="text-sm">Politeknik Negeri Malang</p>
          </div>
          <div className="rounded p-4 flex flex-col items-center">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>
            <p className="font-semibold">Ananda Galih Pratiwi</p>
            <p className="text-sm">Politeknik Negeri Malang</p>
          </div>
          <div className="rounded p-4 flex flex-col items-center">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>{" "}
            <p className="font-semibold">Ahmad Rizal E.S</p>
            <p className="text-sm">Universitas Brawijaya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
    </div>
  );
}

export default Home;
