import React, { useState } from "react";
import { FaUserPlus, FaTools, FaInfoCircle, FaSignInAlt } from "react-icons/fa"; // Import icon
import { useLocation } from "react-router-dom"; // Import useLocation
import DetailUser from "../../modal/DetailUser";
// import AddMemberModal from "../../modal/AddMemberModal"; // Import AddMemberModal
// import AddEquipmentModal from "../../modal/AddEquipmentModal"; // Import AddEquipmentModal

export default function CardPlan({ title, date, imageUrl }) {
  const location = useLocation(); // Get current location
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);

  const openDetailModal = () => {
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  const openMemberModal = () => {
    setIsMemberModalOpen(true);
  };

  const closeMemberModal = () => {
    setIsMemberModalOpen(false);
  };

  const openEquipmentModal = () => {
    setIsEquipmentModalOpen(true);
  };

  const closeEquipmentModal = () => {
    setIsEquipmentModalOpen(false);
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
                  onClick={openMemberModal}
                  className="bg-primary text-white py-1 px-2 rounded-full"
                >
                  <FaUserPlus />
                </button>
                <button
                  onClick={openEquipmentModal}
                  className="bg-primary text-white py-1 px-2 rounded-full"
                >
                  <FaTools />
                </button>
              </>
            )}
            {location.pathname === "/home" && (
              <button
                onClick={openDetailModal}
                className="bg-primary text-white py-1 px-2 rounded-full"
              >
                <FaSignInAlt />
              </button>
            )}
            <button
              onClick={openDetailModal}
              className="bg-primary text-white py-1 px-2 rounded-full"
            >
              <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
      {isDetailModalOpen && <DetailUser closeModal={closeDetailModal} />}
      {/* {isMemberModalOpen && <AddMemberModal closeModal={closeMemberModal} />}
      {isEquipmentModalOpen && <AddEquipmentModal closeModal={closeEquipmentModal} />} */}
    </div>
  );
}
