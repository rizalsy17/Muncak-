// src/services/firebase/firestore.js
import { db } from './config';
import { setDoc, doc } from 'firebase/firestore';

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