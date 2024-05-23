/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdS7tlYhwrgVWOn-B71qHj4pqKgzeOk_8",
  authDomain: "muncak-694ef.firebaseapp.com",
  projectId: "muncak-694ef",
  storageBucket: "muncak-694ef.appspot.com",
  messagingSenderId: "157788384819",
  appId: "1:157788384819:web:fdfda7ca10fa2ad0f5fd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export default app;