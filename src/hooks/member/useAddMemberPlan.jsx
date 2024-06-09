import { useState, useEffect } from 'react';
import { db } from '../../services/firebase/config';
import { doc, getDoc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';

const useAddMemberPlan = (planningId) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [error, setError] = useState(null);
  const [selectedPlanning, setSelectedPlanning] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

      // Pengecekan jumlah peserta saat ini
      const currentParticipantsQuery = query(
        collection(db, "Members"),
        where("planningId", "==", planningId)
      );
      const currentParticipantsSnapshot = await getDocs(currentParticipantsQuery);
      const currentParticipantsCount = currentParticipantsSnapshot.size;

      // Pengecekan apakah jumlah peserta sudah mencapai batas maksimum
      if (currentParticipantsCount >= maxParticipants) {
        setError("Member plan is full.");
        setLoading(false);
        return;
      }

      // Pengecekan apakah pengguna sudah ada di plan
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

      await addDoc(collection(db, "Members"), {
        userId: selectedUser,
        planningId: planningId,
      });

      setLoading(false);
      setSelectedUser('');
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
  };
};

export default useAddMemberPlan;
