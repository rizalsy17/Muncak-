import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const usePlanning = () => {
  const [plannings, setPlannings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Planning"), (snapshot) => {
      const planningData = [];
      snapshot.forEach((doc) => {
        planningData.push({ id: doc.id, ...doc.data() });
      });
      setPlannings(planningData);
    });

    return () => unsubscribe();
  }, []);

  return plannings;
};

export default usePlanning;
