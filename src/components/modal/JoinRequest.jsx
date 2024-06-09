import React from "react";

export default function JoinRequestModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <>
      <input
        className="modal-state"
        id="modal-3"
        type="checkbox"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-3" />
        <div className="modal-content flex flex-col gap-5 p-6 rounded-lg shadow-lg bg-white">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
          >
            ✕
          </button>
          <h2 className="text-xl font-medium text-darkText">
            Join Plan Request
          </h2>
          <span className="text-darkText font-normal">
            Are you sure you want to request to join this plan?
          </span>
          <div className="flex gap-3">
            <button
              className="btn bg-primary btn-block text-white"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className="btn bg-lightText btn-block text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
