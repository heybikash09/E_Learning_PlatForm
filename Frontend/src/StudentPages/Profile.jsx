import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaListUl } from "react-icons/fa6";
import { useAuthStore } from '../contentStore/authStore';
import LandingPage from '../LandingPage/LandingPage';
import Admin from '../AdminPages/Admin';
import FacultyDashboard from '../FacultyPages/FacultyDashboard';
// import User from "../assets/userProfile.jpeg"

const Profile = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for sidebar
  const { logout,user } = useAuthStore();
  if(user)
    var type=user.userType
    console.log(type)
  const handleSignOut = () => {
    console.log("heyy")
    logout();
  };
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return !user ? (
      <LandingPage />
    ) : user.userType==='student'?(
      <div className="h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#4f4fcb] flex flex-col text-white font-sans">
  {/* Navbar */}
  <nav className="px-6 py-5 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md flex items-center justify-between md:justify-start backdrop-blur-md">
    <h1 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500">
      Edu_Nexus
    </h1>

    <button
      onClick={handleSignOut}
      className="absolute right-7 bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:brightness-110 md:flex hidden p-2 rounded-full px-5 shadow-lg transition-all duration-300"
    >
      Signout
    </button>

    <button
      className="md:hidden p-2 rounded bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 hover:brightness-110 transition duration-300"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <FaListUl className="text-white text-xl" />
    </button>
  </nav>

  {/* Main Content */}
  <main className="flex flex-1 overflow-hidden relative">
    {/* Sidebar */}
    <section
      ref={sidebarRef}
      className={`bg-gradient-to-b from-[#232526] to-[#414345] w-[15rem] h-screen md:h-auto px-2 flex flex-col gap-y-3 items-center text-white fixed md:static top-0 left-0 z-50 transition-transform duration-300 ease-in-out
                  ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <div className="h-[4.5rem] w-[4.5rem] overflow-hidden bg-gradient-to-tr from-pink-500 to-yellow-500 my-5 rounded-full border-4 border-white shadow-md">
        <img src="./profile.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {["dashboard", "lecture", "onlinequiz", "enrollment", "feedback"].map((item) => (
        <Link
          key={item}
          to={`/${item}`}
          className={`w-11/12 px-4 py-2 rounded-lg text-center font-medium capitalize tracking-wide transition-all duration-300 ease-in-out
                      ${
                        activeSection === `/${item}`
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-[1.03]"
                          : "bg-white/10 hover:bg-white/20 text-gray-200"
                      }`}
          onClick={() => {
            setActiveSection(`/${item}`);
            setSidebarOpen(false);
          }}
        >
          {item}
        </Link>
      ))}
    </section>

    {/* Content Area */}
    <section className="w-full h-screen overflow-y-auto p-6 bg-gradient-to-tl from-[#f8f9fa] via-[#dfe4ea] to-[#ced6e0] text-gray-800 transition-all duration-300 ease-in-out rounded-tl-3xl shadow-inner">
      <Outlet />
    </section>
  </main>
</div>

    
  ):user.userType==='admin'?(
    <Admin/>
  ):(<FacultyDashboard/>)
};

export default Profile;