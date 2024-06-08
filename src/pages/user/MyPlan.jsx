import React from "react";
import NavbarHome from "../../components/layouts/HomePage/NavbarHome";
import CardPlan from "../../components/layouts/HomePage/CardPlan";
import useMyPlan from "../../hooks/planning/useMyPlan";

export default function MyPlan() {
  const { filteredPlans, searchTerm, handleSearch, userName } = useMyPlan();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-20 p-4 md:mt-24">
    <NavbarHome />
    <div className="w-full max-w-6xl">
      <div className="top-0 bg-white z-10 p-4 mb-4">
        <div className="text-left mb-4">
          <p className="text-xl text-red-500 font-semibold">
            Hello, {userName || "User"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="md:text-2xl text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis mb-2 md:mb-0">
            My Plan
          </h2>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        {filteredPlans.map((plan) => (
          <div className="px-2 w-full md:w-1/3 lg:w-1/3 mb-4" key={plan.id}>
            <CardPlan
              title={plan.tripName}
              date={plan.startDate?.toDate().toLocaleDateString()}
              imageUrl={plan.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
