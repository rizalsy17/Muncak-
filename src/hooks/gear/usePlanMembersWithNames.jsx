import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/config";

const usePlanMembersWithNames = (planningId) => {
  const [planMembersWithNames, setPlanMembersWithNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanMembersWithNames = async () => {
      if (planningId) {
        try {
          const members = await fetchPlanMembers(planningId);
          const membersWithNames = await fetchMembersWithNames(members);
          setPlanMembersWithNames(membersWithNames);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchPlanMembersWithNames();
  }, [planningId]);

  const fetchPlanMembers = async (planningId) => {
    const membersQuery = query(
      collection(db, "Members"),
      where("planningId", "==", planningId)
    );
    const membersSnapshot = await getDocs(membersQuery);
    return membersSnapshot.docs.map((doc) => doc.data());
  };

  const fetchMembersWithNames = async (members) => {
    const membersWithNames = [];
    for (const member of members) {
      const userDoc = doc(db, "Users", member.userId);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
      if (userData) {
        membersWithNames.push({
          id: member.userId,
          name: userData.name,
        });
      }
    }
    return membersWithNames;
  };

  return { planMembersWithNames, loading, error };
};

export default usePlanMembersWithNames;
