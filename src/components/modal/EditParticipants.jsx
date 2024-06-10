import React, { useEffect, useState } from "react";
import useMembers from "../../hooks/member/useMember";
import { useAuth } from "../../contexts/authContext";
import useAddMemberPlan from "../../hooks/member/useAddMemberPlan";
import SuccessModal from "./SuccessMember";

export default function EditParticipants({ closeModal, planningId }) {
  const { user } = useAuth();
  const currentUserUid = user ? user.uid : null;
  const {
    selectedUser,
    handleSelectChange,
    handleAddMember,
    error,
    selectedPlanning,
    loading,
    success,
    requestMembers,
  } = useAddMemberPlan(planningId);
  const { users } = useMembers();
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(true);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Fungsi untuk menampilkan modal sukses
  const handleShowSuccessModal = () => {
    setIsSuccessModalOpen(true);
    setTimeout(() => {
      setIsSuccessModalOpen(false);
    }, 900);
  };

  // Mengubah state modal sukses berdasarkan nilai success
  useEffect(() => {
    if (success) {
      setIsAddMemberModalOpen(false);
      handleShowSuccessModal();
    }
  }, [success]);

  return (
    <>
      {isAddMemberModalOpen && (
        <>
          <input
            className="modal-state"
            id="edit-participants"
            type="checkbox"
            checked
          />
          <div className="modal w-screen">
            <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
              <label
                htmlFor="edit-participants"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
                onClick={() => {
                  setIsAddMemberModalOpen(false);
                  closeModal();
                }}
              >
                ✕
              </label>
              <h2 className="text-xl">Add Member</h2>
              <section className="w-full">
                <div className="form-field">
                  <label className="form-label text-darkText">
                    Member responsible *
                  </label>
                  <select
                    className="input max-w-full bg-white border-1 text-darkText"
                    value={selectedUser}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      Select member
                    </option>
                    {/* Tampilkan pengguna dari koleksi RequestMember */}
                    {requestMembers
                      .filter((requestMember) => requestMember.userId !== currentUserUid)
                      .map((requestMember) => {
                        const user = users.find(u => u.id === requestMember.userId);
                        return (
                          <option key={requestMember.id} value={requestMember.userId}>
                            {user ? user.name : "Unknown User"} {/* Pastikan ini menampilkan nama pengguna */}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </section>
              <div className="flex gap-3">
                <button
                  className="btn bg-primary btn-block"
                  onClick={() => {
                    handleAddMember();
                  }}
                  disabled={!selectedUser || loading}
                >
                  Add Member
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </>
      )}
      {/* Tampilkan modal sukses jika isSuccessModalOpen true */}
      {isSuccessModalOpen && <SuccessModal />}
    </>
  );
}
