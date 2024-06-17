import React from "react";
import WarningIllustration from "../../assets/Warning-rafiki.svg";
import { deletePlanning } from "../../services/firebase/planning/planning";

export default function DeleteConfirmation({
  isOpen,
  onClose,
  planningId,
  onDeleteSuccess,
}) {
  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      await deletePlanning(planningId);
      onClose();
      onDeleteSuccess(planningId);
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-darkText bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={WarningIllustration}
            alt="Warning"
            className="w-48 h-48 mb-2"
          />
          <h2 className="text-xl font-semibold text-darkText">
            Confirm Deletion
          </h2>
          <p className="mb-6 text-gray-600 text-center">
            Are you sure you want to delete this plan?
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={onClose}
            className="btn btn-block px-4 py-2 bg-gray-300 text-darkText font-semibold rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-block px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
