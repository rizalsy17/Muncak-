import React from "react";

export default function CreatePlan() {
  return (
    <>
      <label className="btn bg-primary" htmlFor="create-plan">
        Create Plan
      </label>
      <input className="modal-state" id="create-plan" type="checkbox" />
      <div className="modal w-screen">
        <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
          <label
            htmlFor="create-plan"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
          >
            ✕
          </label>
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
                <label className="form-label text-darkText">
                  Participants*
                </label>
                <input
                  placeholder="Type here"
                  type="text"
                  className="input bg-white border-1 text-darkText"
                />
              </div>
            </div>
          </section>
          <div className="flex gap-3">
            <button className="btn bg-primary btn-block">Create Plan</button>
          </div>
        </div>
      </div>
    </>
  );
}
