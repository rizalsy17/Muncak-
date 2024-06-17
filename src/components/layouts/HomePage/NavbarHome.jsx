import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPerson, MdMenu } from "react-icons/md";
import logo from "../../../assets/muncak-logo.svg";
import { logout } from "../../../services/firebase/auth";
import CreatePlan from "../../modal/CreatePlan";
import ProfileModal from "../../modal/ProfileModal";

export default function NavbarHome() {
  const navigate = useNavigate();
  const [isCreatePlanModalOpen, setIsCreatePlanModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <div className="md:hidden flex items-center space-x-4">
            <MdMenu
              onClick={toggleMenu}
              className="cursor-pointer text-darkText size-8"
            />
            <MdPerson
              onClick={openProfileModal}
              className="cursor-pointer text-darkText size-8"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              onClick={handleLogout}
              className="btn-rounded btn bg-white border border-darkText rounded-lg text-darkText font-light"
            >
              Logout
            </Link>
            <MdPerson
              onClick={openProfileModal}
              className="cursor-pointer text-darkText size-8"
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-white shadow-md absolute top-14 left-0 w-full z-50">
          {" "}
          {/* Centered items in mobile menu */}
          <Link
            to="/home"
            className="text-lightText hover:text-darkText font-light hover:bg-gray-200 px-3 py-2 rounded-lg"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/my_plan"
            className="text-lightText hover:text-darkText font-light hover:bg-gray-200 px-3 py-2 rounded-lg"
            onClick={toggleMenu}
          >
            My Plan
          </Link>
          <Link
            className="text-lightText hover:text-darkText font-light hover:bg-gray-200 px-3 py-2 rounded-lg"
            onClick={() => {
              openCreatePlanModal();
              toggleMenu();
            }}
          >
            Create Plan
          </Link>
          <Link
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="text-lightText hover:text-darkText font-light hover:bg-gray-200 px-3 py-2 rounded-lg"
          >
            Logout
          </Link>
        </div>
      )}
      {isCreatePlanModalOpen && (
        <CreatePlan closeModal={closeCreatePlanModal} />
      )}
      {isProfileModalOpen && <ProfileModal closeModal={closeProfileModal} />}
    </div>
  );
}
