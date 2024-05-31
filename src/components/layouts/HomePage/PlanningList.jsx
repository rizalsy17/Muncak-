import React, { useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import CardPlan from "./CardPlan";

export default function PlanningList() {
  const plans = [
    { title: "Gunung Rinjani", date: "24 Mei 2024" },
    { title: "Gunung Gede", date: "24 Mei 2024" },
    { title: "Gunung Merbabu", date: "24 Mei 2024" },
    { title: "Gunung Batu", date: "24 Mei 2024" },
    { title: "Gunung Batu", date: "24 Mei 2024" },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlans, setFilteredPlans] = useState(plans);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = plans.filter((plan) =>
      plan.title.toLowerCase().includes(query)
    );
    setFilteredPlans(filtered);
  };

  return (
    <div className="mt-10 w-4/5 mx-auto">
      <div className="flex items-center mt-10 mb-4">
        <h2 className="text-xl font-semibold text-darkText">Planning List</h2>
        <LuPlusCircle className="text-2xl text-darkText cursor-pointer ml-4" />
        <div className="ml-auto w-1/4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 bg-white w-full border border-lightText rounded-xl focus:outline-none text-darkText size-8"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        {filteredPlans.map((plan, index) => (
          <div className="px-2 w-full md:w-1/3 lg:w-1/3 mb-4" key={index}>
            <CardPlan title={plan.title} date={plan.date} />
          </div>
        ))}
      </div>
    </div>
  );
}
