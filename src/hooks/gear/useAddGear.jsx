import { useState, useEffect } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const useAddGear = (closeModal, planningId) => {
  const [gearName, setGearName] = useState("");
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [planMembers, setPlanMembers] = useState([]); 
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const handleAddGear = async () => {
    try {
      // Validation
      if (!gearName || !amount || !budget || !selectedMember) {
        setError("Please fill in all fields");
        return;
      }

      await addDoc(collection(db, `Gear/${planningId}/items`), {
        gearName,
        amount: parseInt(amount),
        budget: parseInt(budget),
        responsibleMember: selectedMember
      });

      console.log("Gear added successfully");
      setShowSuccessModal(true); // Set state to show success modal
    } catch (error) {
      console.error("Error adding gear: ", error);
      setError("Failed to add gear. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchPlanMembers = async () => {
      if (planningId) {
        setLoading(true);
        try {
          const membersQuery = query(collection(db, "Members"), where("planningId", "==", planningId));
          const membersSnapshot = await getDocs(membersQuery);
          const membersList = membersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPlanMembers(membersList);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching plan members: ", error);
          setError("Failed to fetch plan members. Please try again later.");
          setLoading(false);
        }
      }
    };

    fetchPlanMembers();
  }, [planningId]);

  return {
    gearName,
    setGearName,
    amount,
    setAmount,
    budget,
    setBudget,
    selectedMember,
    setSelectedMember,
    handleAddGear,
    error,
    loading,
    planMembers,
    showSuccessModal, 
    setShowSuccessModal 
  };
};

export default useAddGear;
