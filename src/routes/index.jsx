import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/authContext";
import ProtectedRoute from "./protectedRoute";
import Landing from "../pages/landing";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import HomeUser from "../pages/user/home";
import AddDummyData from "../test/addDummyData";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeUser />
              </ProtectedRoute>
            }
          />
          <Route path="/add-dummy-data" element={<AddDummyData />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default AppRoutes;
