import React, { useState } from "react";
import NavbarHome from "../../components/layouts/HomePage/NavbarHome";
import useMyPlan from "../../hooks/planning/useMyPlan";
import CardPlan from "../../components/layouts/HomePage/CardPlan";

export default function MyPlan() {
  const { filteredPlans, searchTerm, handleSearch, userName } = useMyPlan();

  return (
    <div className="mt-10 w-4/5 mx-auto">
      <NavbarHome />
      <div className="flex items-center mt-10 mb-4">
        <h2 className="text-xl font-semibold text-darkText">Planning List</h2>
        <div className="ml-auto w-1/4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 bg-white w-full border border-lightText rounded-xl focus:outline-none text-darkText size-8"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mt-24">
        {filteredPlans.map((plan) => (
          <div className="px-2 w-full md:w-1/3 lg:w-1/3 mb-4" key={plan.id}>
            <CardPlan title={plan.tripName} date={plan.startDate?.toDate().toLocaleDateString()} />
          </div>
        ))}
      </div>
    </div>
  );
}
