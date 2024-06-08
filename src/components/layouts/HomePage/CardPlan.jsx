import React, { useState } from "react";
import DetailUser from "../../modal/DetailUser";

export default function CardPlan({ title, date, imageUrl }) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const openDetailModal = () => {
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="bg-white shadow-sm shadow-lightText rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-medium text-darkText">{title}</h3>
            <p className="text-lightText">{date}</p>
          </div>
          <button
            onClick={openDetailModal}
            className="bg-primary text-white py-1  rounded-full w-1/3"
          >
            Detail
          </button>
        </div>
      </div>
      {isDetailModalOpen && <DetailUser closeModal={closeDetailModal} />}
    </div>
  );
}
