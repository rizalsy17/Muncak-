import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const useRegister = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password minimal 6 karakter");
      return;
    }
    try {
      await register(email, password, name);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email sudah digunakan. Silakan gunakan email lain.");
      } else if (error.code === "auth/invalid-email") {
        setError("Format email tidak valid.");
      } else {
        setError("Registrasi gagal. Silakan coba lagi.");
      }
      console.error("Error registering:", error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    handleSubmit,
  };
};

export default useRegister;
