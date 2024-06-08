// src/services/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdS7tlYhwrgVWOn-B71qHj4pqKgzeOk_8",
  authDomain: "muncak-694ef.firebaseapp.com",
  projectId: "muncak-694ef",
  storageBucket: "muncak-694ef.appspot.com",
  messagingSenderId: "157788384819",
  appId: "1:157788384819:web:fdfda7ca10fa2ad0f5fd46",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
