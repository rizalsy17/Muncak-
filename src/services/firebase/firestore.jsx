import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const addUser = (userId, userData) => {
  const userRef = doc(db, "Users", userId);
  return setDoc(userRef, userData);
};

export const addMember = async (memberId, memberData) => {
  try {
    const memberRef = doc(db, "Member", memberId);
    await setDoc(memberRef, memberData);
    console.log("Member added successfully with ID: ", memberId);
  } catch (error) {
    console.error("Error adding member: ", error);
    throw error; // throw the error for further handling
  }
};

export const addPlanning = async (planningId, planningData) => {
  try {
    const planningRef = doc(db, "Planning", planningId);
    await setDoc(planningRef, planningData);
    console.log("Planning added successfully with ID: ", planningId);
  } catch (error) {
    console.error("Error adding planning: ", error);
    throw error; // throw the error for further handling
  }
};

export const addEquipment = async (equipmentId, equipmentData) => {
  try {
    const equipmentRef = doc(db, "Equipment", equipmentId);
    await setDoc(equipmentRef, equipmentData);
    console.log("Equipment added successfully with ID: ", equipmentId);
  } catch (error) {
    console.error("Error adding equipment: ", error);
    throw error; // throw the error for further handling
  }
};

export const getUser = async (userId) => {
  try {
    const userRef = doc(db, "Users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};
