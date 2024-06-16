import React, { useState, useEffect } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/config";
import { useAuth } from "../../contexts/authContext";

export default function ProfileModal({ closeModal }) {
  const { user, userName } = useAuth();
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name);
          setEmail(userData.email);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleSave = async () => {
    try {
      if (user) {
        await updateDoc(doc(db, "Users", user.uid), {
          name,
          email,
        });
        closeModal();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div> */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
