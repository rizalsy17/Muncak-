/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebase/config";
import useMembers from "../../hooks/member/useMember";
import { useAuth } from "../../contexts/authContext";
// import { getUserName } from "../../services/firebase/auth";

export default function DetailOwner({
  planningId,
  title,
  imageUrl,
  closeModal,
}) {
  const [tripData, setTripData] = useState(null);
  const [participants, setParticipants] = useState([]);

  const { users } = useMembers();

  // const [listUsers, setListUser] = useState(users);
  // console.log(listUsers);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const membersQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("status", "==", "approved")
        );

        const membersSnapshot = await getDocs(membersQuery);
        const membersList = membersSnapshot.docs.map((doc) => doc.data());

        if (users.length !== 0 && membersList.length) {
          const data = membersList.map((value) => {
            const user = users.find((value1) => {
              if (value.userId === value1.id) {
                return value1;
              }
            });
            return user;
          });
          setParticipants(data);
        }
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    if (planningId) {
      fetchParticipants();
    }
  }, [planningId, users]);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const tripDoc = await getDoc(doc(db, "Planning", planningId));
        if (tripDoc.exists()) {
          setTripData(tripDoc.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
      }
    };

    if (planningId) {
      fetchTripData();
    }
  }, [planningId]);

  if (!planningId || !tripData) return null;

  return (
    <>
      <input
        className="modal-state"
        id="modal-3"
        type="checkbox"
        checked
        readOnly
      />
      <div className="modal">
        <label
          className="modal-overlay"
          htmlFor="modal-3"
          onClick={closeModal}
        />
        <div className="modal-content w-9/12 md:w-3/12 flex flex-col gap-3 text-darkText bg-white p-0 text-xs relative rounded-lg shadow-lg">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-darkText hover:bg-gray-200"
          >
            ✕
          </button>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-28 object-cover rounded-t-lg"
          />
          <div className="p-5 font-semibold">
            <p className="text-lg font-semibold">{tripData.tripName}</p>
            <div className="divider mt-2 mb-4" />
            <p>Trip Information</p>
            <p className="font-normal">Mountain Location</p>
            <p className="font-normal text-lightText">{tripData.mountain}</p>
            <p className="mt-3">Dates</p>
            <p className="font-normal text-lightText">
              {tripData.startDate.toDate().toLocaleDateString()} -{" "}
              {tripData.endDate.toDate().toLocaleDateString()}
            </p>
            <p className="mt-3">Max Participants</p>
            <p className="font-normal text-lightText">
              {tripData.participants} Person
            </p>
            <div className="divider mt-4 mb-4" />
            <p>Participants</p>
            <p className="font-normal mt-3">List of Participants: </p>
            <div className="ml-2">
              {participants.length > 0 ? (
                participants.map((participant, index) => {
                  return (
                    <p key={index} className="font-normal text-lightText">
                      {index + 1}. {participant.name ?? ""}
                    </p>
                  );
                })
              ) : (
                <p className="font-normal text-lightText">
                  No participants yet.
                </p>
              )}
            </div>
            <div className="divider mt-4 mb-4" />
            <p>Gear</p>
            <p className="font-normal mt-3">List of Gear: </p>
            <div className="ml-2">
              {tripData.gearList && tripData.gearList.length > 0 ? (
                tripData.gearList.map((gear, index) => (
                  <p key={index} className="font-normal text-lightText">
                    {index + 1}. {gear}
                  </p>
                ))
              ) : (
                <p className="font-normal text-lightText">
                  No gear listed yet.
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3 p-4 pt-0">
            <button
              onClick={closeModal}
              className="btn bg-primary text-white btn-block"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
