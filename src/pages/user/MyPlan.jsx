import React, { useState } from "react";
import Navbar from "../../components/layouts/user/navbar";

export default function MyPlan() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-20 p-4 md:mt-24">
      <Navbar />
      <div className="w-full max-w-6xl">
        <div className="top-0 bg-white z-10 p-4 mb-4">
          <div className="text-left mb-4">
            <p className="text-xl text-red-500 font-semibold">
              Hello, Naresh Ananda Rizal
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="md:text-2xl text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis mb-2 md:mb-0">Planning List</h2>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full md:w-auto"
            />
          </div>
        </div>
        <div className="flex md:hidden overflow-x-auto space-x-4 mt-4">
        <div className="card card-image-cover w-64 h-72 flex-shrink-0 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="btn-secondary btn text-xs p-1">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-64 h-72 flex-shrink-0 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="btn-secondary btn text-xs p-1">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-64 h-72 flex-shrink-0 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="btn-secondary btn text-xs p-1">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-64 h-72 flex-shrink-0 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="btn-secondary btn text-xs p-1">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-64 h-72 flex-shrink-0 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="btn-secondary btn text-xs p-1">Learn More</button>
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-4 md:gap-6 mt-4">
          <div className="card card-image-cover w-full h-72 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=1"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Maximizing Your Productivity at Work
              </p>
            </div>
            <div className="card-footer mt-4 absolute bottom-0 right-0">
              <button className="btn-secondary btn text-xs md:text-base p-1 md:p-2">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-full h-72 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=2"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Effective Time Management Strategies
              </p>
            </div>
            <div className="card-footer mt-4 absolute bottom-0 right-0">
              <button className="btn-secondary btn text-xs md:text-base p-1 md:p-2">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-full h-72 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=3"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Balancing Work and Life
              </p>
            </div>
            <div className="card-footer mt-4 absolute bottom-0 right-0">
              <button className="btn-secondary btn text-xs md:text-base p-1 md:p-2">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-full h-72 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=4"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Goal Setting for Success
              </p>
            </div>
            <div className="card-footer mt-4 absolute bottom-0 right-0">
              <button className="btn-secondary btn text-xs md:text-base p-1 md:p-2">Learn More</button>
            </div>
          </div>
          <div className="card card-image-cover w-full h-72 relative">
            <img
              src="https://source.unsplash.com/random/300x200?sig=8"
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="card-body p-4">
              <p className="card-header text-sm font-semibold">
                Boosting Employee Engagement
              </p>
            </div>
            <div className="card-footer mt-4 absolute bottom-0 right-0">
              <button className="btn-secondary btn text-xs md:text-base p-1 md:p-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
