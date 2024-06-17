import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/config";

const useAddMemberPlan = (planningId) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(null);
  const [selectedPlanning, setSelectedPlanning] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [requestMembers, setRequestMembers] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleAddMember = async () => {
    if (!selectedUser || !planningId) {
      setError("Please select a user and a planning.");
      return;
    }

    setLoading(true);

    try {
      const planningDoc = doc(db, "Planning", planningId);
      const planningSnapshot = await getDoc(planningDoc);

      if (!planningSnapshot.exists()) {
        setError("Planning not found");
        setLoading(false);
        return;
      }

      const planningData = planningSnapshot.data();
      const maxParticipants = planningData.participants;

      const currentParticipantsQuery = query(
        collection(db, "Members"),
        where("planningId", "==", planningId)
      );
      const currentParticipantsSnapshot = await getDocs(
        currentParticipantsQuery
      );
      const currentParticipantsCount = currentParticipantsSnapshot.size;

      if (currentParticipantsCount >= maxParticipants) {
        setError("Member plan is full.");
        setLoading(false);
        return;
      }

      const userInPlanQuery = query(
        collection(db, "Members"),
        where("userId", "==", selectedUser),
        where("planningId", "==", planningId)
      );
      const userInPlanSnapshot = await getDocs(userInPlanQuery);

      if (!userInPlanSnapshot.empty) {
        setError("User already joined this plan.");
        setLoading(false);
        return;
      }

      const requestMemberRef = collection(db, "RequestMember");
      const requestMemberQuery = query(
        requestMemberRef,
        where("planningId", "==", planningId),
        where("userId", "==", selectedUser),
        where("status", "==", "pending")
      );
      const requestMemberSnapshot = await getDocs(requestMemberQuery);

      if (!requestMemberSnapshot.empty) {
        const requestMemberDoc = requestMemberSnapshot.docs[0];
        await updateDoc(requestMemberDoc.ref, { status: "joined" });
      }

      await addDoc(collection(db, "Members"), {
        userId: selectedUser,
        planningId,
      });

      setLoading(false);
      setSelectedUser("");
      setError(null);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPlanning = async () => {
      setLoading(true);
      try {
        const planningDoc = doc(db, "Planning", planningId);
        const planningSnapshot = await getDoc(planningDoc);

        if (planningSnapshot.exists()) {
          setSelectedPlanning(planningSnapshot.data());
        } else {
          setError("Planning not found");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (planningId) {
      fetchPlanning();
    }
  }, [planningId]);

  useEffect(() => {
    const fetchRequestMembers = async () => {
      try {
        const requestMemberQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("status", "==", "pending")
        );
        const requestMemberSnapshot = await getDocs(requestMemberQuery);
        const requestMemberData = requestMemberSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequestMembers(requestMemberData);
      } catch (error) {
        console.error("Error fetching request members:", error);
      }
    };

    if (planningId) {
      fetchRequestMembers();
    }
  }, [planningId]);

  useEffect(() => {
    setSuccess(false);
  }, [planningId]);

  return {
    selectedUser,
    handleSelectChange,
    handleAddMember,
    error,
    selectedPlanning,
    loading,
    success,
    requestMembers,
  };
};

export default useAddMemberPlan;
