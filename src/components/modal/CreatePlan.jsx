import React from "react";

export default function CreatePlan({ closeModal }) {
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
        <section className="w-full">
          <div className="form-group grid grid-cols-2 gap-3">
            <div className="form-field col-span-2">
              <label className="form-label text-darkText">Trip name*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input max-w-full bg-white border-1 text-darkText"
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Start Date*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input bg-white border-1 text-darkText"
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">End Date*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input bg-white border-1 text-darkText"
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Route*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input bg-white border-1 text-darkText"
              />
            </div>
            <div className="form-field">
              <label className="form-label text-darkText">Participants*</label>
              <input
                placeholder="Type here"
                type="text"
                className="input bg-white border-1 text-darkText"
              />
            </div>
          </div>
        </section>
        <div className="flex gap-3">
          <button className="btn text-white bg-primary btn-block">
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
}
