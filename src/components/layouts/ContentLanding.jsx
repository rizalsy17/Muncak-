import React from "react";
import { Link } from "react-router-dom";
import mounImage from "../../assets/bro.png";

export default function ContentLanding() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-auto min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start md:ml-20">
          <div className="text-center md:text-left">
            <p className="font-poppins font-medium text-xl mb-2 text-darkText">
              Selamat Datang di Muncak!
            </p>
            <h1 className="my-2 font-bold leading-tight m-0 text-darkText">
              Jelajahi Gunung,
            </h1>
            <h1 className="my-2 font-bold leading-tight m-0 text-darkText">
              Raih Muncak,
            </h1>
            <h1 className="my-2 leading-tight m-0 text-darkText">
              <span className="font-bold">Bersama</span>{" "}
              <span className="font-bold border-b-8 border-red-500">
                MunCak!
              </span>
            </h1>
            <button className="btn-rounded btn text-white bg-[#FF4343] w-48 rounded-lg font-normal mt-10 md:mt-4 shadow-xl">
              Klik untuk memulai
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 mb-4 md:mb-0 max-w-xs md:max-w-full mx-auto md:mx-0 md:mr-24">
        <img className="w-full" src={mounImage} alt="Hero Image" />
      </div>
    </div>
  );
}
