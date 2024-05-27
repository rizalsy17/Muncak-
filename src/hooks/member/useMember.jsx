/* eslint-disable no-param-reassign */
import { useState, useEffect } from "react";
import {
  addMember,
  getMembers,
  updateMember,
  deleteMember,
  migrateUsersToMembers,
} from "../../services/firebase/member/member";

const useMember = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getMembers();
        setMembers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createMember = async (newMember) => {
    try {
      const docRef = await addMember(newMember);
      newMember.id = docRef.id;
      setMembers([...members, newMember]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editMember = async (id, updatedMember) => {
    try {
      await updateMember(id, updatedMember);
      setMembers(members.map((m) => (m.id === id ? updatedMember : m)));
    } catch (err) {
      setError(err.message);
    }
  };

  const removeMember = async (id) => {
    try {
      await deleteMember(id);
      setMembers(members.filter((m) => m.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    members,
    loading,
    error,
    createMember,
    editMember,
    removeMember,
    migrateUsersToMembers,
  };
};

export default useMember;
