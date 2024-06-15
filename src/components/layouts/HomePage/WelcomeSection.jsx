import React, { useEffect, useState } from "react";
import { fetchRandomImage } from "../../../services/unsplash";
import { useAuth } from "../../../contexts/authContext";

export default function WelcomeSection() {
  const { userName } = useAuth();
  const [image, setImage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetchRandomImage("indonesia mountain");
        setImage(response.data[0]?.urls?.regular);
      } catch (error) {
        console.error("Error fetching image from Unsplash", error);
      }
    };

    getImage();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center mt-28 w-full">
      <div className="relative w-4/5 h-64">
        {image && (
          <img
            src={image}
            alt="Welcome"
            className="object-cover w-full h-full rounded-lg"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-darkText bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold">Hello, {userName}!</h1>
          <p className="text-white text-xl mt-2">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}
