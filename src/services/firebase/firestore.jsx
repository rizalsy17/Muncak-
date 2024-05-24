// src/services/firebase/firestore.js
import { db } from './config';
import { setDoc, doc } from 'firebase/firestore';

export const addUser = (userId, userData) => {
  const userRef = doc(db, "Users", userId);
  return setDoc(userRef, userData);
};
