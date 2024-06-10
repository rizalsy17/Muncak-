import React, { useState, useEffect } from "react";
import { FaUserPlus, FaTools, FaInfoCircle, FaSignInAlt, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import JoinRequestModal from "../../modal/JoinRequest";
import { useAuth } from "../../../contexts/authContext";

export default function CardPlan({
  title,
  date,
  imageUrl,
  planningId,
  userId,
  onClick,
  onJoinRequest,
  onEditGearClick,
  onEditParticipantsClick,
  onEditPlanClick, // Tambahkan prop untuk tombol Edit
  onDeletePlanClick, // Tambahkan prop untuk tombol Hapus
  hasRequested // Terima prop hasRequested
}) {
  const location = useLocation();
  const { user } = useAuth();
  const currentUserUid = user ? user.uid : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlreadyJoined, setIsAlreadyJoined] = useState(false);
  const [hasAlreadyRequested, setHasAlreadyRequested] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Cek apakah pengguna sudah pernah join atau melakukan request
    if (userId === currentUserUid) {
      setIsAlreadyJoined(true);
    } else if (hasRequested) {
      setHasAlreadyRequested(true);
    }
  }, [userId, currentUserUid, hasRequested]);

  const handleJoinRequest = () => {
    if (!isAlreadyJoined && !hasAlreadyRequested) {
      onJoinRequest();
      setIsModalOpen(false);
      setHasAlreadyRequested(true);
    }
  };

  return (
    <div className="relative bg-white shadow-sm shadow-lightText rounded-lg">
      {isAlreadyJoined && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center p-2">
          <span className="text-green-500 mr-1">&#10003;</span>
          <span className="text-green-500 text-xs">Already Joined</span>
        </div>
      )}
      {hasRequested && !isAlreadyJoined && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center p-2">
          <span className="text-yellow-500 mr-1">&#9888;</span>
          <span className="text-yellow-500 text-xs">Already Requested</span>
        </div>
      )}
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
                <button
                  onClick={() => onEditPlanClick(planningId)}
                  className="bg-primary text-white py-1 px-2 rounded-full"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDeletePlanClick(planningId)}
                  className="bg-red-500 text-white py-1 px-2 rounded-full"
                >
                  <FaTrashAlt />
                </button>
              </>
            )}
            {location.pathname === "/home" && currentUserUid !== userId && (
              <button
                onClick={isAlreadyJoined || hasAlreadyRequested ? null : (hasRequested ? openModal : handleJoinRequest)}
                className={`bg-primary text-white py-1 px-2 rounded-full ${
                  isAlreadyJoined || hasAlreadyRequested ? "cursor-not-allowed" : "cursor-pointer"
                }`}
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
      {isModalOpen && (
        <JoinRequestModal
          isOpen={isModalOpen}
          onClose={closeModal}
          planningId={planningId}
          userId={userId}
          message="Anda sudah melakukan request"
        />
      )}
    </div>
  );
}
