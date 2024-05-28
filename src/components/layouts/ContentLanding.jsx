import React from "react";
import { Link } from "react-router-dom";
import mounImage from "../../assets/bro.png";

export default function ContentLanding() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 mx-auto h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Col */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center text-darkText md:text-left ml-20">
            <p className="font-medium text-xl mb-2">Welcome to MunCak!</p>
            <h1 className="my-2 font-semibold leading-tight m-0">
              Explore Mountains,
            </h1>
            <h1 className="my-2 font-semibold leading-tight m-0">
              Reach the Peak,
            </h1>
            <h1 className="my-2 leading-tight m-0">
              <span className="font-semibold">With</span>{" "}
              <span className="font-semibold border-b-8 border-primary">
                MunCak!
              </span>
            </h1>
            <Link
              to="/login"
              className="btn-rounded btn text-white text-base font-light bg-primary w-48 rounded-lg mt-4 md:mt-8 shadow-xl"
            >
              Click to start
            </Link>
          </div>
        </div>
        {/* Right Col */}
        <div className="hidden md:flex w-full md:w-2/5 justify-end mt-8 md:mt-0">
          <img className="w-90" src={mounImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
