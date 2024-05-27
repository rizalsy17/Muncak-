import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

const addDummyMemberData = async (userRefs, planningRefs) => {
  try {
    const memberCollection = collection(db, "Member");
    const memberData = userRefs.map((user, index) => ({
      id: user.id,
      id_perjalanan: planningRefs[0].id,
      nama_anggota: user.name,
      kontak_anggota: user.email,
      tugas: index === 0 ? "Leader" : "Member",
    }));

    const memberRefs = [];
    for (const member of memberData) {
      const memberRef = await addDoc(memberCollection, member);
      memberRefs.push({ id: memberRef.id, ...member });
    }
    console.log("Dummy member data added successfully to Firestore");
    return memberRefs;
  } catch (error) {
    console.error("Error adding dummy member data to Firestore:", error);
    throw error;
  }
};

export default addDummyMemberData;
