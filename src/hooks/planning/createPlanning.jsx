/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../../services/firebase/config";

const createPlanning = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [mountain, setMountain] = useState("");
  const [participants, setParticipants] = useState(0);
  const [image, setImage] = useState(null);
  const [newDocumentId, setNewDocumentId] = useState(null); // State untuk menyimpan ID dokumen baru

  const handleSubmit = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("No user is logged in");
      }

      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);

      // Convert startDate and endDate to Timestamp
      const startTimestamp = Timestamp.fromDate(new Date(startDate));
      const endTimestamp = Timestamp.fromDate(new Date(endDate));

      const docRef = await addDoc(collection(db, "Planning"), {
        tripName,
        startDate: startTimestamp,
        endDate: endTimestamp,
        imageUrl,
        mountain,
        participants,
        userId: user.uid,
        userEmail: user.email,
      });

      console.log("Document written with ID: ", docRef.id);
      setNewDocumentId(docRef.id); // Simpan ID dokumen baru ke state
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return {
    tripName,
    setTripName,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    mountain,
    setMountain,
    participants,
    setParticipants,
    image,
    handleImageChange,
    handleSubmit,
    newDocumentId, // Kembalikan ID dokumen baru dari state
  };
};

export default createPlanning;
