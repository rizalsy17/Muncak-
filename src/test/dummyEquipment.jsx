import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

const addDummyEquipmentData = async (memberRefs) => {
  try {
    const equipmentCollection = collection(db, "Equipment");
    const equipmentData = memberRefs.map((member, index) => ({
      id_perjalanan: member.id_perjalanan,
      nama_perlengkapan: index === 0 ? "Tent" : "Sleeping Bag",
      penanggung_jawab: member.nama_anggota,
    }));

    for (const equipment of equipmentData) {
      await addDoc(equipmentCollection, equipment);
    }
    console.log("Dummy equipment data added successfully to Firestore");
  } catch (error) {
    console.error("Error adding dummy equipment data to Firestore:", error);
    throw error;
  }
};

export default addDummyEquipmentData;
