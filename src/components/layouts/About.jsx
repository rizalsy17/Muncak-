import React from "react";
import rzImage from '../../assets/rz.jpg';

export default function About() {
  return (
    <div className="container mt-20 mx-auto min-h-screen px-4 sm font-light:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-darkText">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-semibold">
            <span className="text-primary">WHO</span> WE ARE
          </p>
        </div>
        <div className="flex justify-center items-center md:justify-start md:items-center w-full md:w-3/4 text-center md:text-left">
          <p className="text-sm md:text-base text-darkText">
            Welcome to MunCak! We are a dedicated team of mountain enthusiasts
            and tech experts committed to making your mountain climbing
            experience safer, easier, and more enjoyable. Our mission is to
            provide a comprehensive platform that assists climbers, from
            beginners to veterans, in planning their trips efficiently.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-4xl font-semibold">
            <span className="text-primary">OUR</span> STORY
          </p>
        </div>
        <div className="flex justify-center items-center md:justify-start md:items-center w-full md:w-3/4 text-center md:text-left">
          <p className="text-sm md:text-base text-darkText">
            Born out of a shared passion for mountain climbing and a recognition
            of the challenges faced by climbers, MunCak! was developed by a
            group of friends who wanted to make a difference. We combined our
            expertise in technology and love for adventure to build a platform
            that simplifies and enhances the planning process for climbers.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-4xl font-semibold text-center text-darkText">
          <span className="text-primary">OUR</span> TEAM
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="rounded p-4 flex flex-col items-center text-darkText">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>
            <p className="font-semibold">Naresh Pratista</p>
            <p className="text-sm">Politeknik Negeri Malang</p>
          </div>
          <div className="rounded p-4 flex flex-col items-center text-darkText">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>
            <p className="font-semibold">Ananda Galih Pratiwi</p>
            <p className="text-sm">Politeknik Negeri Malang</p>
          </div>
          <div className="rounded p-4 flex flex-col items-center text-darkText">
            <div className="avatar avatar-ring-primary avatar-xl w-24 h-24 mb-4 avatar-ring-error">
            <img src={rzImage} alt="avatar" />
            </div>
            <p className="font-semibold">Ahmad Rizal E.S</p>
            <p className="text-sm">Institut Teknologi dan Bisnis Asia Malang</p>
          </div>
        </div>
      </div>
    </div>
  );
}
