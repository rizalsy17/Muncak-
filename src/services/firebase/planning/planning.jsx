import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config";

const planningCollection = collection(db, "Planning");

export const addPlanning = async (planning) => {
  const docRef = await addDoc(planningCollection, planning);
  console.log("Planning added with ID: ", docRef.id);
  return docRef;
};

export const getPlannings = async () => {
  const snapshot = await getDocs(planningCollection);
  const plannings = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log("Plannings: ", plannings);
  return plannings;
};

export const updatePlanning = async (id, updatedPlanning) => {
  const planningDoc = doc(db, "Planning", id);
  await updateDoc(planningDoc, updatedPlanning);
  console.log("Planning updated with ID: ", id);
};

export const deletePlanning = async (id) => {
  const planningDoc = doc(db, "Planning", id);
  await deleteDoc(planningDoc);
  console.log("Planning deleted with ID: ", id);
};
