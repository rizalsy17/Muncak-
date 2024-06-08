import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/config";
import { useAuth } from "../../contexts/authContext";

const useMyPlan = () => {
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user, userName } = useAuth();

  useEffect(() => {
    const fetchPlans = async () => {
      if (user) {
        try {
          const plansCollection = collection(db, "Planning");
          const q = query(plansCollection, where("userId", "==", user.uid));
          const plansSnapshot = await getDocs(q);
          const plansData = plansSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPlans(plansData);
          setFilteredPlans(plansData);
        } catch (error) {
          console.error("Error fetching plans:", error);
        }
      }
    };

    fetchPlans();
  }, [user]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    const filtered = plans.filter((plan) =>
      plan.tripName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlans(filtered);
  };

  return { plans, filteredPlans, searchTerm, handleSearch, userName };
};

export default useMyPlan;
