import { useState, useEffect } from "react";
import { db } from "../../services/firebase/config";
import {
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const useJoinRequest = (planningId, userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [hasRequested, setHasRequested] = useState(false);

  useEffect(() => {
    const checkExistingRequest = async () => {
      if (!planningId || !userId) {
        setError("Planning ID and User ID are required.");
        return;
      }

      try {
        const requestQuery = query(
          collection(db, "RequestMember"),
          where("planningId", "==", planningId),
          where("userId", "==", userId)
        );

        const requestSnapshot = await getDocs(requestQuery);
        if (!requestSnapshot.empty) {
          setHasRequested(true);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    checkExistingRequest(); // Check existing request when component mounts
  }, [planningId, userId]);

  const sendJoinRequest = async () => {
    if (!planningId || !userId) {
      setError("Planning ID and User ID are required.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const planningDocRef = doc(db, "Planning", planningId);
      const planningSnapshot = await getDoc(planningDocRef);
      if (!planningSnapshot.exists()) {
        throw new Error("Planning not found");
      }

      const userDocRef = doc(db, "Users", userId);
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
        throw new Error("User not found");
      }

      await addDoc(collection(db, "RequestMember"), {
        planningId,
        userId,
        status: "pending",
        timestamp: serverTimestamp(),
      });

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    sendJoinRequest,
    hasRequested,
  };
};

export default useJoinRequest;
