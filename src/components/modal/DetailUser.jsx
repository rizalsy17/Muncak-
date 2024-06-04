import React from "react";
import DetailOwner from "./DetailOwner";

export default function DetailUser({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <DetailOwner
        showEditButton={false}
        showDeleteButton={false}
        buttonText="Join Request"
        closeModal={closeModal}
      />
    </div>
  );
}
