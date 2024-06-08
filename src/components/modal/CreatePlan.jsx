/* eslint-disable radix */
import React from "react";
import createPlanning from "../../hooks/planning/createPlanning";

export default function CreatePlan({ closeModal }) {
  const {
    tripName,
    setTripName,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    mountain,
    setMountain,
    participants,
    setParticipants,
    image,
    handleImageChange,
    handleSubmit,
  } = createPlanning();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit();
    closeModal(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white p-6 relative">
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
        >
          ✕
        </button>
        <h2 className="text-xl">Create New Plan</h2>
        <form className="w-full" onSubmit={handleFormSubmit}>
          <div className="form-group grid grid-cols-2 gap-3">
            <div className="form-field col-span-2">
              <label className="form-label text-darkText">Trip Name*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input max-w-full bg-white border-1 text-darkText"
                value={tripName} // Sesuaikan dengan nilai state
                onChange={(e) => setTripName(e.target.value)} // Sesuaikan dengan fungsi setState
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Start Date*</label>
              <input
                placeholder="Type here"
                type="date"
                className="input bg-white border-1 text-darkText"
                value={startDate} // Sesuaikan dengan nilai state
                onChange={(e) => setStartDate(e.target.value)} // Sesuaikan dengan fungsi setState
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">End Date*</label>
              <input
                placeholder="Type here"
                type="date"
                className="input bg-white border-1 text-darkText"
                value={endDate} // Sesuaikan dengan nilai state
                onChange={(e) => setEndDate(e.target.value)} // Sesuaikan dengan fungsi setState
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Mountain*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input bg-white border-1 text-darkText"
                value={mountain} // Sesuaikan dengan nilai state
                onChange={(e) => setMountain(e.target.value)} // Sesuaikan dengan fungsi setState
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Image*</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="input bg-white border-1 text-darkText"
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Participants*</label>
              <input
                placeholder="Type here"
                type="number"
                className="input bg-white border-1 text-darkText"
                value={participants} // Sesuaikan dengan nilai state
                onChange={(e) => setParticipants(parseInt(e.target.value))}
              />
            </div>
          </div>
        </form>
        <div className="flex gap-3">
          <button
            className="btn text-white bg-primary btn-block"
            onClick={handleFormSubmit}
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
}
