import React from "react";

export default function EditGear() {
  return (
    <>
      <label className="btn bg-primary" htmlFor="edit-gear">
        Create Plan
      </label>
      <input className="modal-state" id="edit-gear" type="checkbox" />
      <div className="modal w-screen">
        <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
          <label
            htmlFor="edit-gear"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
          >
            ✕
          </label>
          <h2 className="text-xl">Add Gear</h2>
          <section className="w-full">
            <div className="form-group">
              <div className="form-field ">
                <label className="form-label text-darkText">Gear Name *</label>
                <input
                  placeholder="Type here"
                  type="text"
                  className="input max-w-full bg-white border-1 text-darkText"
                />
              </div>
              <div className="form-field ">
                <label className="form-label text-darkText">Total *</label>
                <input
                  placeholder="Type here"
                  type="number"
                  min="0"
                  step="1"
                  className="input max-w-full bg-white border-1 text-darkText"
                />
              </div>
              <div className="form-field">
                <label className="form-label text-darkText">
                  Member responsible *
                </label>
                <select className="input max-w-full bg-white border-1 text-darkText">
                  <option value="" disabled selected>
                    Select member
                  </option>
                  <option value="member1">Member 1</option>
                  <option value="member2">Member 2</option>
                  <option value="member3">Member 3</option>
                </select>
              </div>
            </div>
          </section>
          <div className="flex gap-3">
            <button className="btn bg-primary btn-block">Add Gear</button>
          </div>
        </div>
      </div>
    </>
  );
}
