import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return handleLogout;
};

export default useLogout;
