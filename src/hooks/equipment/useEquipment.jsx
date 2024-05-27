import { useState, useEffect } from "react";
import {
  addEquipment,
  getEquipments,
  updateEquipment,
  deleteEquipment,
} from "../../services/firebase/equipment/equipment";

const useEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getEquipments();
        setEquipments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createEquipment = async (newEquipment) => {
    try {
      await addEquipment(newEquipment);
      setEquipments([...equipments, newEquipment]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editEquipment = async (id, updatedEquipment) => {
    try {
      await updateEquipment(id, updatedEquipment);
      setEquipments(
        equipments.map((eq) => (eq.id === id ? updatedEquipment : eq))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeEquipment = async (id) => {
    try {
      await deleteEquipment(id);
      setEquipments(equipments.filter((eq) => eq.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    equipments,
    loading,
    error,
    createEquipment,
    editEquipment,
    removeEquipment,
  };
};

export default useEquipment;
