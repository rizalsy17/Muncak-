import React, { useEffect, useState } from "react";
import useAddGear from "../../hooks/gear/useAddGear";
import usePlanMembersWithNames from "../../hooks/gear/usePlanMembersWithNames";
import SuccessGear from "./SuccessGear"; // Import modal SuccessGear
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebase/config";
import useMembers from "../../hooks/member/useMember";

export default function EditGear({ closeModal, planningId }) {
  const { planMembersWithNames, loading, error } =
    usePlanMembersWithNames(planningId);
  const {
    gearName,
    setGearName,
    amount,
    setAmount,
    budget,
    setBudget,
    selectedMember,
    planMembers,
    setSelectedMember,
    handleAddGear,
    showSuccessModal,
    setShowSuccessModal,
  } = useAddGear(closeModal, planningId);
  const [participants, setParticipants] = useState([]);
  const { users } = useMembers();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const membersQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("status", "==", "approved")
        );

        const membersSnapshot = await getDocs(membersQuery);
        const membersList = membersSnapshot.docs.map((doc) => doc.data());

        if (users.length !== 0 && membersList.length) {
          const data = membersList.map((value) => {
            const user = users.find((value1) => {
              if (value.userId === value1.id) {
                return value1;
              }
            });
            return user;
          });
          setParticipants(data);
        }
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    if (planningId) {
      fetchParticipants();
    }
  }, [planningId, users]);

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
        closeModal();
      }, 900);
    }
  }, [showSuccessModal, setShowSuccessModal, closeModal]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {!showSuccessModal && (
        <>
          <input
            className="modal-state"
            id="edit-gear"
            type="checkbox"
            defaultChecked
          />
          <div className="modal w-screen">
            <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
              <label
                htmlFor="edit-gear"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-darkText hover:bg-gray-200"
                onClick={closeModal}
              >
                ✕
              </label>
              <h2 className="text-xl">Add Gear</h2>
              <section className="w-full">
                <div className="form-group">
                  <div className="form-field">
                    <label className="form-label text-darkText">
                      Gear Name *
                    </label>
                    <input
                      value={gearName}
                      onChange={(e) => setGearName(e.target.value)}
                      placeholder="Type here"
                      type="text"
                      className="input max-w-full bg-white border-1 text-darkText"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-darkText">Amount *</label>
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Type here"
                      type="number"
                      min="0"
                      step="1"
                      className="input max-w-full bg-white border-1 text-darkText"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-darkText">
                      Budget (Rp) *
                    </label>
                    <input
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Type here"
                      type="number"
                      min="0"
                      step="1000"
                      className="input max-w-full bg-white border-1 text-darkText"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-darkText">
                      Member responsible *
                    </label>
                    <select
                      value={selectedMember}
                      onChange={(e) => setSelectedMember(e.target.value)}
                      className="input max-w-full bg-white border-1 text-darkText"
                    >
                      <option value="" disabled>
                        Select member
                      </option>
                      {participants.map((user) => (
                        <option key={user.id} value={user.name}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
              <div className="flex gap-3">
                <button
                  onClick={handleAddGear}
                  className="btn bg-primary btn-block"
                >
                  Add Gear
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal SuccessGear */}
      {showSuccessModal && (
        <SuccessGear onClose={() => setShowSuccessModal(false)} />
      )}
    </>
  );
}
