// src/test/dummyPlanning.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

// Function to add dummy data to Planning collection
const addDummyPlanningData = async () => {
  try {
    const planningCollection = collection(db, "Planning");
    const planningData = [
      {
        tanggal_keberangkatan: "2024-06-01",
        tanggal_kepulangan: "2024-06-05",
        nama_gunung: "Mount Example",
        max_anggota: 10,
      },
    ];

    const planningRefs = [];
    for (const planning of planningData) {
      const planningRef = await addDoc(planningCollection, planning);
      planningRefs.push({ id: planningRef.id, ...planning });
    }
    console.log("Dummy planning data added successfully to Firestore");
    return planningRefs;
  } catch (error) {
    console.error("Error adding dummy planning data to Firestore:", error);
    throw error;
  }
};

export default addDummyPlanningData;
