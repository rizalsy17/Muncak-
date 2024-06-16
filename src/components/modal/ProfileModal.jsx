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
    <div className="fixed inset-0 bg-darkText bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-darkText">
              Edit Profile
            </h2>
            <button
              onClick={closeModal}
              className="text-darkText hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-darkText">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Uncomment this section if you want to include email editing
            <div>
              <label className="block text-sm font-medium text-darkText">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 bg-white border border-lightText rounded-md focus:outline-none text-darkText focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            */}
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
