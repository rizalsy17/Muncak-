import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarHome from "../components/layouts/HomePage/NavbarHome";
import WelcomeSection from "../components/layouts/HomePage/WelcomeSection";
import PlanningList from "../components/layouts/HomePage/PlanningList";
import { auth } from "../services/firebase/config";
import { useAuth } from "../contexts/authContext";

export default function HomePage() {
  const { user, userName } = useAuth();

  return (
    <div>
      <NavbarHome />
      <div className="container mx-auto mt-4 w-4/5">
        <WelcomeSection userName={user} />
        <PlanningList />
      </div>
    </div>
  );
}
