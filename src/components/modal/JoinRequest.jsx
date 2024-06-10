import React, { useEffect, useState } from "react";
import useJoinRequest from "../../hooks/requestMember/useJoinRequest";

export default function JoinRequestModal({ isOpen, onClose, planningId, userId }) {
  const { loading, error, success, sendJoinRequest, hasRequested } = useJoinRequest(planningId, userId);
  const [alreadyRequested, setAlreadyRequested] = useState(false);

  useEffect(() => {
    console.log("JoinRequestModal Props:", { planningId, userId });
    if (hasRequested) {
      setAlreadyRequested(true);
    }
  }, [planningId, userId, hasRequested]);

  const handleConfirmRequest = async () => {
    // Lakukan validasi apakah pengguna sudah melakukan permintaan sebelumnya
    if (hasRequested) {
      console.log("User has already requested to join this plan.");
      setAlreadyRequested(true);
      return;
    }

    await sendJoinRequest();
    if (!error) {
      onClose();
    }
  };

  // Modal akan ditampilkan jika isOpen bernilai true
  if (!isOpen) return null;

  return (
    <>
      <input className="modal-state" id="modal-3" type="checkbox" checked={isOpen} readOnly />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-3" onClick={onClose}></label>
        <div className="modal-content flex flex-col gap-5 p-6 rounded-lg shadow-lg bg-white">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200">
            ✕
          </button>
          <h2 className="text-xl font-medium text-darkText">Join Plan Request</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {success && <p>Request sent successfully!</p>}
          {!loading && !error && !success && (
            <>
              <span className="text-darkText font-normal">
                {alreadyRequested ? "You have already requested to join this plan." : "Are you sure you want to request to join this plan?"}
              </span>
              {alreadyRequested && <p className="text-green-500 font-normal">Already Requested</p>}
              <div className="flex gap-3">
                <button className="btn bg-primary btn-block text-white" onClick={handleConfirmRequest}>
                  Confirm
                </button>
                <button className="btn bg-lightText btn-block text-white" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
