// src/hooks/usePlanning.js
import { useState, useEffect } from 'react';
import { addPlanning, getPlannings, updatePlanning, deletePlanning } from '../../services/firebase/planning/planning';

const usePlanning = () => {
  const [plannings, setPlannings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPlannings();
        setPlannings(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createPlanning = async (newPlanning) => {
    try {
      await addPlanning(newPlanning);
      setPlannings([...plannings, newPlanning]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editPlanning = async (id, updatedPlanning) => {
    try {
      await updatePlanning(id, updatedPlanning);
      setPlannings(plannings.map((pl) => (pl.id === id ? updatedPlanning : pl)));
    } catch (err) {
      setError(err.message);
    }
  };

  const removePlanning = async (id) => {
    try {
      await deletePlanning(id);
      setPlannings(plannings.filter((pl) => pl.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    plannings,
    loading,
    error,
    createPlanning,
    editPlanning,
    removePlanning,
  };
};

export default usePlanning;
