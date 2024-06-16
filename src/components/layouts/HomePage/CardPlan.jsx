import React, { useState, useEffect } from "react";
import {
  FaUserPlus,
  FaTools,
  FaInfoCircle,
  FaSignInAlt,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import JoinRequestModal from "../../modal/JoinRequest";
import EditParticipantsModal from "../../modal/EditParticipants";
import DetailOwner from "../../modal/DetailOwner";
import EditPlanModal from "../../modal/EditPlanModal"; // Import EditPlanModal
import { useAuth } from "../../../contexts/authContext";
import DeleteConfirmation from "../../modal/DeleteConfirmation";

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
  onEditPlanClick,
  onDeletePlanClick,
  hasRequested,
}) {
  const location = useLocation();
  const { user } = useAuth();
  const currentUserUid = user ? user.uid : null;
  const [isJoinRequestModalOpen, setIsJoinRequestModalOpen] = useState(false);
  const [isEditParticipantsModalOpen, setIsEditParticipantsModalOpen] =
    useState(false);
  const [isDetailOwnerModalOpen, setIsDetailOwnerModalOpen] = useState(false);
  const [isEditPlanModalOpen, setIsEditPlanModalOpen] = useState(false);
  const [isAlreadyJoined, setIsAlreadyJoined] = useState(false);
  const [hasAlreadyRequested, setHasAlreadyRequested] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  const openJoinRequestModal = () => setIsJoinRequestModalOpen(true);
  const closeJoinRequestModal = () => setIsJoinRequestModalOpen(false);
  const openEditParticipantsModal = () => setIsEditParticipantsModalOpen(true);
  const closeEditParticipantsModal = () =>
    setIsEditParticipantsModalOpen(false);
  const openDetailOwnerModal = () => setIsDetailOwnerModalOpen(true);
  const closeDetailOwnerModal = () => setIsDetailOwnerModalOpen(false);
  const openEditPlanModal = () => setIsEditPlanModalOpen(true);
  const closeEditPlanModal = () => setIsEditPlanModalOpen(false);
  const openDeleteConfirmation = () => setIsDeleteConfirmationOpen(true);
  const closeDeleteConfirmation = () => setIsDeleteConfirmationOpen(false);

  useEffect(() => {
    if (userId === currentUserUid) {
      setIsAlreadyJoined(true);
    } else if (hasRequested) {
      setHasAlreadyRequested(true);
    }
  }, [userId, currentUserUid, hasRequested]);

  const handleJoinRequest = () => {
    if (!isAlreadyJoined && !hasAlreadyRequested) {
      onJoinRequest();
      setIsJoinRequestModalOpen(false);
      setHasAlreadyRequested(true);
    }
  };

  const handleEditPlanSave = (updatedPlan) => {
    onEditPlanClick(updatedPlan);
  };
  const handleDeleteConfirm = () => {
    onDeletePlanClick(planningId);
    closeDeleteConfirmation();
  };

  return (
    <div className="relative bg-white shadow-sm shadow-lightText rounded-lg">
      {isAlreadyJoined && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center p-2">
          <span className="text-green-500 mr-1">&#10003;</span>
          <span className="text-green-500 text-xs">Already Joined</span>
        </div>
      )}
      {hasAlreadyRequested && !isAlreadyJoined && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center p-2">
          <span className="text-yellow-500 mr-1">&#9888;</span>
          <span className="text-yellow-500 text-xs">Already Requested</span>
        </div>
      )}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
        onClick={openDetailOwnerModal} // Klik gambar untuk membuka modal DetailOwner
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
                  onClick={openEditParticipantsModal}
                  className="bg-primary text-white py-1 px-2 rounded-full tooltip tooltip-top"
                  data-tooltip="Join Request"
                >
                  <FaUserPlus />
                </button>
                <button
                  onClick={() => {
                    onClick(planningId);
                    onEditGearClick();
                  }}
                  className="bg-primary text-white py-1 px-2 rounded-full tooltip tooltip-top"
                  data-tooltip="Add Gear"
                >
                  <FaTools />
                </button>
                <button
                  onClick={openEditPlanModal}
                  className="bg-primary text-white py-1 px-2 rounded-full tooltip tooltip-top"
                  data-tooltip="Edit Plan"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={openDeleteConfirmation}
                  className="bg-primary text-white py-1 px-2 rounded-full tooltip tooltip-top"
                  data-tooltip="Delete Plan"
                >
                  <FaTrashAlt />
                </button>
              </>
            )}
            {location.pathname === "/home" && currentUserUid !== userId && (
              <button
                onClick={
                  isAlreadyJoined || hasAlreadyRequested
                    ? null
                    : openJoinRequestModal
                }
                className={`bg-primary text-white py-1 px-2 rounded-full ${
                  isAlreadyJoined || hasAlreadyRequested
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <FaSignInAlt />
              </button>
            )}
            <button
              onClick={openDetailOwnerModal}
              className="bg-primary text-white py-1 px-2 rounded-full tooltip tooltip-top"
              data-tooltip="Detail Plan"
            >
              <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
      {isJoinRequestModalOpen && (
        <JoinRequestModal
          isOpen={isJoinRequestModalOpen}
          onClose={closeJoinRequestModal}
          planningId={planningId}
          userId={currentUserUid}
        />
      )}
      {isEditParticipantsModalOpen && (
        <EditParticipantsModal
          isOpen={isEditParticipantsModalOpen}
          closeModal={closeEditParticipantsModal} // Pass closeModal as prop
          planningId={planningId}
        />
      )}
      {isDetailOwnerModalOpen && (
        <div className="fixed inset-0 bg-darkText bg-opacity-50 flex items-center justify-center z-50">
          <DetailOwner
            closeModal={closeDetailOwnerModal}
            planningId={planningId}
            userId={userId}
            title={title}
            date={date}
            imageUrl={imageUrl}
          />
        </div>
      )}
      {isEditPlanModalOpen && (
        <EditPlanModal
          closeModal={closeEditPlanModal}
          planningId={planningId}
          onSave={handleEditPlanSave}
        />
      )}
      {isDeleteConfirmationOpen && (
        <DeleteConfirmation
          isOpen={isDeleteConfirmationOpen}
          onClose={closeDeleteConfirmation}
          planningId={planningId}
          onDeleteSuccess={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
