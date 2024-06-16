import React, { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/config";
import useMembers from "../../hooks/member/useMember";

export default function EditPlanModal({ closeModal, planningId, onSave }) {
  const [tripData, setTripData] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [gears, setGears] = useState([]);
  const [updatedTripData, setUpdatedTripData] = useState({});
  const [updatedGears, setUpdatedGears] = useState([]);
  const { users } = useMembers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripDoc = await getDoc(doc(db, "Planning", planningId));
        if (tripDoc.exists()) {
          const data = tripDoc.data();
          setTripData(data);
          setUpdatedTripData(data);
        }

        const membersQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("status", "==", "approved")
        );
        const membersSnapshot = await getDocs(membersQuery);
        const membersList = membersSnapshot.docs.map((doc) => doc.data());
        const participantsData = membersList
          .map((member) => users.find((user) => user.id === member.userId))
          .filter(Boolean);
        setParticipants(participantsData);

        const gearsQuery = query(
          collection(db, "Gear"),
          where("planningId", "==", planningId)
        );
        const gearsSnapshot = await getDocs(gearsQuery);
        const gearsList = gearsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGears(gearsList);
        setUpdatedGears(gearsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (planningId) {
      fetchData();
    }
  }, [planningId, users]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTripData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGearChange = (index, field, value) => {
    const newGears = [...updatedGears];
    newGears[index] = { ...newGears[index], [field]: value };
    setUpdatedGears(newGears);
  };

  const handleSave = async () => {
    try {
      const tripDocRef = doc(db, "Planning", planningId);
      await updateDoc(tripDocRef, updatedTripData);

      const gearPromises = updatedGears.map((gear) =>
        updateDoc(doc(db, "Gear", gear.id), gear)
      );

      await Promise.all(gearPromises);

      onSave(updatedTripData);
    } catch (error) {
      console.error("Error updating trip data:", error);
      // Anda mungkin ingin menambahkan notifikasi error di sini
    } finally {
      closeModal();
    }
  };

  if (!tripData) return null;

  return (
    <div className="fixed inset-0 bg-darkText bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-darkText">Edit Plan</h2>
            <button
              onClick={closeModal}
              className="text-darkText hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <img
            src={tripData.imageUrl}
            alt={updatedTripData.tripName}
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-darkText">
                Trip Name
              </label>
              <input
                type="text"
                name="tripName"
                value={updatedTripData.tripName || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-darkText">
                  Mountain Location
                </label>
                <input
                  type="text"
                  name="mountain"
                  value={updatedTripData.mountain || ""}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkText">
                  Max Participants
                </label>
                <input
                  type="number"
                  name="participants"
                  value={updatedTripData.participants || ""}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkText">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={
                    updatedTripData.startDate
                      ?.toDate()
                      .toISOString()
                      .split("T")[0] || ""
                  }
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkText">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={
                    updatedTripData.endDate
                      ?.toDate()
                      .toISOString()
                      .split("T")[0] || ""
                  }
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-darkText">
              Participants
            </h3>
            <div className="mt-2 space-y-2">
              {participants.length > 0 ? (
                participants.map((participant, index) => (
                  <p key={index} className="text-gray-600">
                    {index + 1}. {participant?.name ?? "Unknown"}
                  </p>
                ))
              ) : (
                <p className="text-gray-600">No participants yet.</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-darkText">Gear</h3>
            <ul className="mt-2 space-y-4">
              {updatedGears.map((gear, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-md">
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-darkText">
                      Gear Name
                    </label>
                    <input
                      type="text"
                      value={gear.gearName}
                      onChange={(e) =>
                        handleGearChange(index, "gearName", e.target.value)
                      }
                      className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-darkText">
                        Amount
                      </label>
                      <input
                        type="number"
                        value={gear.amount}
                        onChange={(e) =>
                          handleGearChange(index, "amount", e.target.value)
                        }
                        className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkText">
                        Budget (Rp)
                      </label>
                      <input
                        type="number"
                        value={gear.budget}
                        onChange={(e) =>
                          handleGearChange(index, "budget", e.target.value)
                        }
                        className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="btn btn-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Save Changes
            </button>
            <button
              onClick={closeModal}
              className="btn btn-block px-4 py-2 bg-gray-300 text-darkText rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
