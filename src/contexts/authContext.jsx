/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  register as firebaseRegister,
  login as firebaseLogin,
  logout as firebaseLogout,
  onAuthStateChange,
  getUserName,
} from "../services/firebase/auth";
import { addUser } from "../services/firebase/firestore";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      if (user) {
        setUserName(getUserName(user));
      } else {
        setUserName("");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = async (email, password, name) => {
    try {
      const userCredential = await firebaseRegister(email, password);
      const { user } = userCredential;

      console.log(user);
      if (user) {
        await addUser(user.uid, {
          email: user.email,
          name,
        });
        // await user.updateProfile({ displayName: name });
        setUserName(name);
      }
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await firebaseLogin(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
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
    <authContext.Provider
      value={{ user, userName, register, login, logout, loading }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
