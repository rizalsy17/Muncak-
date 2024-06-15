import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  where,
} from "firebase/firestore";
import { FaPlusCircle } from "react-icons/fa";
import CardPlan from "./CardPlan";
import CreatePlan from "../../modal/CreatePlan";
import { db } from "../../../services/firebase/config";

export default function PlanningList({ userId, onJoinRequest }) {
  const [plans, setPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestedPlans, setRequestedPlans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 6;

  const totalPages = Math.ceil(filteredPlans.length / plansPerPage);

  const getCurrentPlans = () => {
    const indexOfLastPlan = currentPage * plansPerPage;
    const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
    return filteredPlans.slice(indexOfFirstPlan, indexOfLastPlan);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Planning"), (snapshot) => {
      const planningData = [];
      snapshot.forEach((doc) => {
        planningData.push({ id: doc.id, ...doc.data() });
      });
      setPlans(planningData);
      setFilteredPlans(planningData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchRequestedPlans = async () => {
      if (userId) {
        const requestSnapshot = await getDocs(
          collection(db, "RequestMember"),
          where("userId", "==", userId)
        );
        const requestedPlanIds = requestSnapshot.docs.map(
          (doc) => doc.data().planningId
        );
        setRequestedPlans(requestedPlanIds);
      }
    };

    fetchRequestedPlans();
  }, [userId]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = plans.filter((plan) =>
      plan.tripName.toLowerCase().includes(query)
    );
    setFilteredPlans(filtered);
    setCurrentPage(1);
  };

  const addPlan = async (newPlan) => {
    try {
      const docRef = await addDoc(collection(db, "Planning"), newPlan);
      const addedPlan = { id: docRef.id, ...newPlan };
      setPlans([...plans, addedPlan]);
      setFilteredPlans([...filteredPlans, addedPlan]);
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10 w-4/5 mx-auto">
      <div className="flex items-center mt-10 mb-4">
        <h2 className="text-xl font-semibold text-darkText">Planning List</h2>
        <FaPlusCircle
          onClick={openModal}
          className="text-2xl text-darkText cursor-pointer ml-4"
        />
        <div className="ml-auto w-1/4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 bg-white w-full border border-lightText rounded-xl focus:outline-none text-darkText size-8"
          />
        </div>
      </div>
      {filteredPlans.length > 0 ? (
        <div className="flex flex-wrap mx-2">
          {getCurrentPlans().map((plan) => (
            <div className="px-2 w-full md:w-1/3 lg:w-1/3 mb-4" key={plan.id}>
              <CardPlan
                title={plan.tripName}
                date={plan.startDate.toDate().toLocaleDateString()}
                imageUrl={plan.imageUrl}
                planningId={plan.id}
                userId={plan.userId}
                onJoinRequest={() => {
                  console.log(
                    "Joining plan with ID:",
                    plan.id,
                    "User ID:",
                    userId
                  );
                  onJoinRequest(plan.id);
                }}
                hasRequested={requestedPlans.includes(plan.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No plans found.</p>
      )}
      {filteredPlans.length > 0 && (
        <div className="pagination flex justify-center my-6">
          <button
            className="btn btn-ghost btn-sm hover:bg-primary hover:text-white transition-colors duration-200"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
                fill="#333333"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`btn btn-sm transition-colors duration-200 ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "btn-ghost text-gray-600 hover:bg-primary hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-ghost btn-sm hover:bg-primary hover:text-white transition-colors duration-200"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      )}
      {isModalOpen && <CreatePlan closeModal={closeModal} addPlan={addPlan} />}
    </div>
  );
}
