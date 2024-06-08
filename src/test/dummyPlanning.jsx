// src/test/dummyPlanning.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

// Function to add dummy data to Planning collection
const addDummyPlanningData = async () => {
  try {
    const planningCollection = collection(db, "Planning");
    const planningData = [
      {
        tripName: "Example Trip",
        startDate: new Date("2024-06-01"),
        endDate: new Date("2024-06-05"),
        mountain: "Mount Example",
        participants: 10,
        image: { // Menggunakan objek File sebagai nilai properti image
          name: "image.jpg", // Nama berkas gambar
          type: "image/jpeg", // Tipe MIME berkas gambar (misalnya, image/jpeg)
          size: 12345, // Ukuran berkas gambar dalam byte
          data: "base64_encoded_image_data" // Data gambar yang dienkripsi base64
        },
      },
    ];

    const planningRefs = [];
    for (const planning of planningData) {
      // Simpan data perencanaan perjalanan bersama dengan berkas gambar ke Firestore
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
