/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import useMembers from "../../hooks/member/useMember";
import { db } from "../../services/firebase/config";

export default function EditParticipants({ isOpen, closeModal, planningId }) {
  const { users } = useMembers();
  const [requestMembers, setRequestMembers] = useState([]);

  useEffect(() => {
    const fetchJoinRequests = async () => {
      if (planningId) {
        const requestQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("status", "==", "pending")
        );

        const requestSnapshot = await getDocs(requestQuery);
        const requests = requestSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequestMembers(requests);
      }
    };

    fetchJoinRequests();
  }, [planningId]);

  const approveJoinRequest = async (requestId) => {
    const requestDocRef = doc(db, "RequestMember", requestId);
    await updateDoc(requestDocRef, { status: "approved" });
    setRequestMembers(
      requestMembers.filter((request) => request.id !== requestId)
    );
  };

  const rejectJoinRequest = async (requestId) => {
    const requestDocRef = doc(db, "RequestMember", requestId);
    await updateDoc(requestDocRef, { status: "rejected" });
    setRequestMembers(
      requestMembers.filter((request) => request.id !== requestId)
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <input
        className="modal-state"
        id="edit-participants"
        type="checkbox"
        checked
        onChange={closeModal}
      />
      <div className="modal w-screen">
        <div className="modal-content flex flex-col gap-5 w-4/6 text-darkText bg-white">
          <label
            htmlFor="edit-participants"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
            onClick={closeModal}
          >
            ✕
          </label>
          <h2 className="text-xl">Join Requests</h2>

          <div className="mt-3 mb-3 text-center">
            {requestMembers.length === 0 ? (
              <p>No join requests at the moment.</p>
            ) : (
              <ul className="list-disc pl-4">
                {requestMembers.map((request) => (
                  <li
                    key={request.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-left">
                        {users.find((u) => u.id === request.userId)?.name ||
                          "Unknown User"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Requested at:{" "}
                        {request.timestamp.toDate().toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="btn bg-primary"
                        onClick={() => approveJoinRequest(request.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn bg-gray-200 text-darkText"
                        onClick={() => rejectJoinRequest(request.id)}
                      >
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
