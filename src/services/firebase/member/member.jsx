/* eslint-disable no-shadow */
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../config";

const userCollection = collection(db, "Users");
const memberCollection = collection(db, "Member");

export const addMember = async (member) => {
  const docRef = await addDoc(memberCollection, member);
  console.log("Member added with ID: ", docRef.id);
  return docRef;
};

export const getMembers = async () => {
  const snapshot = await getDocs(memberCollection);
  const members = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log("Members: ", members);
  return members;
};

export const updateMember = async (id, updatedMember) => {
  const memberDoc = doc(db, "Member", id);
  await updateDoc(memberDoc, updatedMember);
  console.log("Member updated with ID: ", id);
};

export const deleteMember = async (id) => {
  const memberDoc = doc(db, "Member", id);
  await deleteDoc(memberDoc);
  console.log("Member deleted with ID: ", id);
};

export const migrateUsersToMembers = async () => {
  try {
    const snapshot = await getDocs(userCollection);
    snapshot.forEach(async (userDoc) => {
      const userData = userDoc.data();
      // Copy user data to member collection
      await setDoc(doc(memberCollection, userDoc.id), userData);
      console.log("User migrated to Member:", userDoc.id);
    });
  } catch (error) {
    console.error("Error migrating users to members:", error);
    throw error; // Throw the error for further handling
  }
};
