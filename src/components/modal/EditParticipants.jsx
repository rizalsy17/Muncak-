import React from "react";

export default function EditParticipants() {
  return (
    <>
      <label className="btn bg-primary" htmlFor="edit-participants">
        Create Plan
      </label>
      <input className="modal-state" id="edit-participants" type="checkbox" />
      <div className="modal w-screen">
        <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
          <label
            htmlFor="edit-participants"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
          >
            ✕
          </label>
          <h2 className="text-xl">Create New Plan</h2>
          <section className="w-full">
            <div className="form-group">
              <div className="form-field ">
                <label className="form-label text-darkText">Name *</label>
                <input
                  placeholder="Type here"
                  type="text"
                  className="input max-w-full bg-white border-1 text-darkText"
                />
              </div>
              <div className="form-field ">
                <label className="form-label text-darkText">Contact *</label>
                <input
                  placeholder="Type here"
                  type="text"
                  className="input max-w-full bg-white border-1 text-darkText"
                />
              </div>
              <div className="form-field ">
                <label className="form-label text-darkText">Roles *</label>
                <input
                  placeholder="Type here"
                  type="text"
                  className="input max-w-full bg-white border-1 text-darkText"
                />
              </div>
            </div>
          </section>
          <div className="flex gap-3">
            <button className="btn bg-primary btn-block">Add to Plan</button>
          </div>
        </div>
      </div>
    </>
  );
}
