import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/authContext";
import ProtectedRoute from "./protectedRoute";
import Landing from "../pages/landing";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import MyPlan from "../pages/MyPlan";
import AddDummyData from "../test/addDummyData";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

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
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my_plan"
            element={
              <ProtectedRoute>
                <MyPlan />
              </ProtectedRoute>
            }
          />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/add-dummy-data" element={<AddDummyData />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default AppRoutes;
