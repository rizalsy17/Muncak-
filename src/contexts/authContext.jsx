// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from 'react';
import { register as firebaseRegister, login as firebaseLogin, logout as firebaseLogout, onAuthStateChange } from '../services/firebase/auth';
import { addUser } from '../services/firebase/firestore';

const authContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = async (email, password, name) => {
    try {
      const userCredential = await firebaseRegister(email, password);
      const user = userCredential.user;

      console.log(user);
      if (user) {
        await addUser(user.uid, {
          email: user.email,
          name: name,
        });
      }
    } catch (error) {
      console.error("Error registering:", error);
      throw error; // Throw the error to be handled by the calling function
    }
  };

  const login = async (email, password) => {
    try {
      await firebaseLogin(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Throw the error to be handled by the calling function
    }
  };

  const logout = async () => {
    try {
      await firebaseLogout();
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <authContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </authContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(authContext);
