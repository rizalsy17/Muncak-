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

export default function DetailOwner({
  planningId,
  title,
  imageUrl,
  closeModal,
}) {
  const [tripData, setTripData] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [gears, setGears] = useState([]);

  const { users } = useMembers();

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
            const user = users.find((value1) => value.userId === value1.id);
            return user;
          });
          setParticipants(data);
        }
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    const fetchGears = async () => {
      try {
        const gearsQuery = query(
          collection(db, "Gear"),
          where("planningId", "==", planningId)
        );
        const gearsSnapshot = await getDocs(gearsQuery);
        const gearsList = gearsSnapshot.docs.map((doc) => doc.data());

        setGears(gearsList);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    if (planningId) {
      fetchParticipants();
      fetchGears();
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
        <div className="modal-content w-9/12 md:w-3/12 flex flex-col gap-4 text-darkText bg-white p-0 text-xs relative rounded-lg shadow-lg">
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
          <div className="p-6 font-medium space-y-3">
            <p className="text-2xl font-bold">{tripData.tripName}</p>
            <p className="text-md font-semibold text-gray-500">
              Created by: {tripData.userEmail}
            </p>
            <div className="divider mt-2 mb-4" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Trip Information</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-darkText">Mountain Location</p>
                <p className="text-gray-600 font-normal">{tripData.mountain}</p>
                <p className="text-darkText">Dates</p>
                <p className="text-gray-600 font-normal">
                  {tripData.startDate.toDate().toLocaleDateString()} -{" "}
                  {tripData.endDate.toDate().toLocaleDateString()}
                </p>
                <p className="text-light2">Max Participants</p>
                <p className="text-gray-600 font-normal">
                  {tripData.participants} Person
                </p>
              </div>
            </div>
            <div className="divider mt-4 mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-semibold">Participants</p>
              <p className="font-semibold mt-3">List of Participants: </p>
              {participants.length > 0 ? (
                participants.map((participant, index) => (
                  <p key={index} className="text-gray-600 font-normal">
                    {index + 1}. {participant.name ?? ""}
                  </p>
                ))
              ) : (
                <p className="font-normal text-gray-600">
                  No participants yet.
                </p>
              )}
            </div>
            <div className="divider mt-4 mb-4" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Gear</h3>
              {gears.length > 0 ? (
                <ul className="space-y-4">
                  {gears.map((gear, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 p-4 rounded shadow-sm overflow-hidden"
                    >
                      <p className="font-semibold text-base text-darkText mb-2">
                        {gear.gearName}
                      </p>
                      <div className="grid grid-cols-2 gap-2 ">
                        <p className="text-darkText">Amount:</p>
                        <p className="text-gray-600 font-normal">
                          {gear.amount}
                        </p>
                        <p className="text-darkText">Budget:</p>
                        <p className="text-gray-600 font-normal">
                          Rp.{gear.budget}
                        </p>
                        <p className="text-darkText">Responsible:</p>
                        <p className="text-gray-600 font-normal">
                          {gear.responsibleMember}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className=" font-normal text-gray-600">
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
