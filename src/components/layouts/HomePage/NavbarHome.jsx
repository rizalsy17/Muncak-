import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineGTranslate, MdPerson } from "react-icons/md"; // Import icon profile
import logo from "../../../assets/muncak-logo.svg";
import { logout } from "../../../services/firebase/auth";
import CreatePlan from "../../modal/CreatePlan";
import ProfileModal from "../../modal/ProfileModal"; // Import Profile Modal

export default function NavbarHome() {
  const navigate = useNavigate();
  const [isCreatePlanModalOpen, setIsCreatePlanModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State for profile modal

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const openCreatePlanModal = () => {
    setIsCreatePlanModalOpen(true);
  };

  const closeCreatePlanModal = () => {
    setIsCreatePlanModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white p-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Ripple UI Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/home"
              className="text-lightText hover:text-darkText font-light"
            >
              Home
            </Link>
            <Link
              to="/my_plan"
              className="text-lightText hover:text-darkText font-light"
            >
              My Plan
            </Link>
            <Link
              className="text-lightText hover:text-darkText font-light"
              onClick={openCreatePlanModal}
            >
              Create Plan
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <MdOutlineGTranslate />
            <MdPerson onClick={openProfileModal} className="cursor-pointer" /> {/* Profile Icon */}
            <Link
              onClick={handleLogout}
              className="btn-rounded btn bg-white border border-darkText rounded-lg text-darkText font-light"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
      {isCreatePlanModalOpen && <CreatePlan closeModal={closeCreatePlanModal} />}
      {isProfileModalOpen && <ProfileModal closeModal={closeProfileModal} />} {/* Profile Modal */}
    </div>
  );
}
