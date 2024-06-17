import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/rafiki.svg";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left">
      <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-4">
        <img
          src={NotFoundImage}
          alt="Page not found"
          className="w-3/4 md:w-96"
        />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl text-darkText font-semibold mb-2">
          This Page Could Not Be Found!
        </h1>
        <p className="text-sm md:text-lg text-darkText">
          We are sorry, but the page you are looking for is not available
        </p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 mt-3 bg-primary text-white rounded-lg shadow-md transition duration-300"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
