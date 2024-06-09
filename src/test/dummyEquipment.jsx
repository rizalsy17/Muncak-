import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

const addDummyEquipmentData = async (memberRefs) => {
  try {
    if (!memberRefs || !memberRefs.length) {
      throw new Error("Invalid member references");
    }

    const equipmentCollection = collection(db, "Equipment");

    const equipmentData = memberRefs.map((member, index) => ({
      id_perjalanan: member.id_perjalanan,
      gearName: index === 0 ? "Tent" : "Sleeping Bag",
      amount: index === 0 ? 2 : 4,
      budget: index === 0 ? 200000 : 400000,
      responsibleMember: member.id_user,
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
