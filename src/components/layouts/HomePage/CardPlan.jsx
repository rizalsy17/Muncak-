import React, { useState } from "react";
import { FaUserPlus, FaTools, FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import JoinRequestModal from "../../modal/JoinRequest";

export default function CardPlan({
  title,
  date,
  imageUrl,
  planningId,
  onClick,
  onEditGearClick,
  onEditParticipantsClick,
}) {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleJoinRequest = () => {
    closeModal();
  };

  return (
    <div className="bg-white shadow-sm shadow-lightText rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-medium text-darkText">{title}</h3>
            <p className="text-lightText">{date}</p>
          </div>
          <div className="flex space-x-2">
            {location.pathname === "/my_plan" && (
              <>
                <button
                  onClick={() => {
                    onClick(planningId);
                    onEditParticipantsClick();
                  }}
                  className="bg-primary text-white py-1 px-2 rounded-full"
                >
                  <FaUserPlus />
                </button>
                <button
                  onClick={() => {
                    onClick(planningId);
                    onEditGearClick();
                  }}
                  className="bg-primary text-white py-1 px-2 rounded-full"
                >
                  <FaTools />
                </button>
              </>
            )}
            {location.pathname === "/home" && (
              <button
                onClick={openModal}
                className="bg-primary text-white py-1 px-2 rounded-full"
              >
                <FaSignInAlt />
              </button>
            )}
            <button
              onClick={() => onClick(planningId)}
              className="bg-primary text-white py-1 px-2 rounded-full"
            >
              <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
      <JoinRequestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onJoin={handleJoinRequest}
        title={title}
      />
    </div>
  );
}
