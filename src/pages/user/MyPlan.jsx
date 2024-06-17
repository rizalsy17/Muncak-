import React, { useState } from "react";
import NavbarHome from "../../components/layouts/HomePage/NavbarHome";
import CardPlan from "../../components/layouts/HomePage/CardPlan";
import useMyPlan from "../../hooks/planning/useMyPlan";
import EditParticipants from "../../components/modal/EditParticipants";
import EditGear from "../../components/modal/EditGear"; // Import modal EditGear

export default function MyPlan() {
  const { filteredPlans, searchTerm, handleSearch, userName, deletePlanById } = useMyPlan();
  const [selectedPlanningId, setSelectedPlanningId] = useState(null);
  const [isEditGearModalOpen, setIsEditGearModalOpen] = useState(false); 
  const [isEditParticipantsModalOpen, setIsEditParticipantsModalOpen] = useState(false);

  const handleCardPlanClick = (planningId) => {
    setSelectedPlanningId(planningId);
  };

  const openEditGearModal = () => {
    setIsEditGearModalOpen(true);
  };

  const closeEditGearModal = () => {
    setIsEditGearModalOpen(false);
  };

  const openEditParticipantsModal = () => {
    setIsEditParticipantsModalOpen(true);
  };

  const closeEditParticipantsModal = () => {
    setIsEditParticipantsModalOpen(false);
  };

  const handleDeletePlan = (planningId) => {
    deletePlanById(planningId); // Call the hook method to update state
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-20 p-4 md:mt-24">
      <NavbarHome />
      <div className="w-full max-w-6xl">
        <div className="top-0 bg-white z-10 p-4 mb-4">
          <div className="text-left mb-4">
            <p className="text-xl text-red-500 font-semibold">
              Hello, {userName || "User"}
            </p>
            <p className="text-gray-600">
              Welcome back! Here you can manage all your plans. Feel free to
              search, edit, or view the details of your trips.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10">
            <h2 className="md:text-2xl text-sm font-semibold whitespace-nowrap overflow-hidden text-primary mb-2 md:mb-0">
              My Plan
            </h2>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="input input-bordered w-full md:w-auto p-2 bg-white border border-lightText rounded-xl focus:outline-none text-darkText size-8"
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
                planningId={plan.id}
                onClick={() => handleCardPlanClick(plan.id)}
                onEditGearClick={openEditGearModal}
                onEditParticipantsClick={openEditParticipantsModal}
                onDeletePlanClick={handleDeletePlan} // Add delete plan handler
              />
            </div>
          ))}
        </div>
      </div>
      {selectedPlanningId && isEditParticipantsModalOpen && (
        <EditParticipants
          closeModal={closeEditParticipantsModal}
          planningId={selectedPlanningId}
        />
      )}
      {isEditGearModalOpen && (
        <EditGear
          closeModal={closeEditGearModal}
          planningId={selectedPlanningId}
        />
      )}
    </div>
  );
}
