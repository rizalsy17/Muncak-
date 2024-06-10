import React, { useState } from "react";
import NavbarHome from "../components/layouts/HomePage/NavbarHome";
import WelcomeSection from "../components/layouts/HomePage/WelcomeSection";
import PlanningList from "../components/layouts/HomePage/PlanningList";
import JoinRequestModal from "../components/modal/JoinRequest"; 
import { useAuth } from "../contexts/authContext";

export default function HomePage() {
  const { user } = useAuth();
  const [isJoinRequestModalOpen, setIsJoinRequestModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinRequest = (planId) => {
    setSelectedPlan(planId);
    setIsJoinRequestModalOpen(true);
  };

  const closeJoinRequestModal = () => {
    setIsJoinRequestModalOpen(false);
  };

  return (
    <div>
      <NavbarHome />
      <div className="container mx-auto mt-4 w-4/5">
        <WelcomeSection userName={user?.displayName} />
        <PlanningList userId={user?.uid} onJoinRequest={handleJoinRequest} />
      </div>
      {isJoinRequestModalOpen && (
        <JoinRequestModal
          isOpen={isJoinRequestModalOpen}
          onClose={closeJoinRequestModal}
          planningId={selectedPlan}
          userId={user?.uid}
        />
      )}
    </div>
  );
}
