import React from "react";
import DetailOwner from "./DetailOwner";

export default function DetailUser() {
  return (
    <>
      <DetailOwner
        showEditButton={false}
        showDeleteButton={false}
        buttonText="Join Request"
      />
    </>
  );
}
