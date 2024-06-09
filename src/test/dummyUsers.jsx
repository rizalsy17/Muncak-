// // src/test/dummyUsers.js
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../services/firebase/config";

// // Function to add dummy data to Users collection
// const addDummyUserData = async () => {
//   try {
//     const userCollection = collection(db, "Users");
//     const userData = [
//       { name: "Alice", email: "alice@example.com" },
//       { name: "Bob", email: "bob@example.com" },
//     ];

//     const userRefs = [];
//     for (const user of userData) {
//       const userRef = await addDoc(userCollection, user);
//       userRefs.push({ id: userRef.id, ...user });
//     }
//     console.log("Dummy user data added successfully to Firestore");
//     return userRefs;
//   } catch (error) {
//     console.error("Error adding dummy user data to Firestore:", error);
//     throw error;
//   }
// };

// export default addDummyUserData;
