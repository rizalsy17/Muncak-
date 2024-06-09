import React from "react";

function SuccessGear({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex">
      <div className="relative w-auto max-w-md m-auto mt-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-9.293a1 1 0 011.32-.083l.094.083 4 4a1 1 0 01-1.32 1.497l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.497-.083l.094.083z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Gear Added Successfully!
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              You have successfully added gear to the planning.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button onClick={onClose} className="btn bg-primary btn-block">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessGear;
