import { db } from '../config';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const equipmentCollection = collection(db, 'Equipment');

export const addEquipment = async (equipment) => {
  const docRef = await addDoc(equipmentCollection, equipment);
  console.log('Equipment added with ID: ', docRef.id);
  return docRef;
};

export const getEquipments = async () => {
  const snapshot = await getDocs(equipmentCollection);
  const equipments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log('Equipments: ', equipments);
  return equipments;
};

export const updateEquipment = async (id, updatedEquipment) => {
  const equipmentDoc = doc(db, 'Equipment', id);
  await updateDoc(equipmentDoc, updatedEquipment);
  console.log('Equipment updated with ID: ', id);
};

export const deleteEquipment = async (id) => {
  const equipmentDoc = doc(db, 'Equipment', id);
  await deleteDoc(equipmentDoc);
  console.log('Equipment deleted with ID: ', id);
};
