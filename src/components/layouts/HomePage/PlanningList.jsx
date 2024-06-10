// PlanningList.js
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import CardPlan from "./CardPlan";
import CreatePlan from "../../modal/CreatePlan";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../services/firebase/config";

export default function PlanningList({ userId, onJoinRequest }) {
  const [plans, setPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestedPlans, setRequestedPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const plansCollection = collection(db, "Planning");
        const plansSnapshot = await getDocs(plansCollection);
        const plansData = plansSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlans(plansData);
        setFilteredPlans(plansData);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

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
        const requestedPlanIds = requestSnapshot.docs.map((doc) => doc.data().planningId);
        setRequestedPlans(requestedPlanIds);
      }
    };

    fetchRequestedPlans();
  }, [userId]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = plans.filter((plan) =>
      plan.title.toLowerCase().includes(query)
    );
    setFilteredPlans(filtered);
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
      <div className="flex flex-wrap -mx-2">
        {filteredPlans.map((plan) => (
          <div className="px-2 w-full md:w-1/3 lg:w-1/3 mb-4" key={plan.id}>
            <CardPlan
              title={plan.tripName}
              date={plan.startDate.toDate().toLocaleDateString()}
              imageUrl={plan.imageUrl}
              planningId={plan.id}
              userId={plan.userId} 
              onJoinRequest={() => {
                console.log("Joining plan with ID:", plan.id, "User ID:", userId);
                onJoinRequest(plan.id);
              }}
              hasRequested={requestedPlans.includes(plan.id)} // Tambahkan prop hasRequested
            />
          </div>
        ))}
      </div>
      {isModalOpen && <CreatePlan closeModal={closeModal} addPlan={addPlan} />}
    </div>
  );
}
