import React, { useEffect } from "react";
import useAddGear from "../../hooks/gear/useAddGear";
import usePlanMembersWithNames from "../../hooks/gear/usePlanMembersWithNames";
import SuccessGear from "./SuccessGear"; // Import modal SuccessGear

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
    setSelectedMember,
    handleAddGear,
    showSuccessModal,
    setShowSuccessModal,
  } = useAddGear(closeModal, planningId);

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
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
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
                      {planMembersWithNames.map((user) => (
                        <option key={user.id} value={user.id}>
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
