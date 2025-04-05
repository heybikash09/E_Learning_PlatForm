import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../contentStore/authStore";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from "react-icons/fa";

export default function Landing() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { userType, setUserType } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginOption = (role) => {
    setUserType(role);
    setDropdownOpen(false);
    navigate(`/signup/${role}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-100 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500">
            🚀 EduNexus
          </h1>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Sign Up
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow-xl rounded-lg w-48"
              >
                <ul className="text-gray-800 dark:text-white">
                  <li onClick={() => handleLoginOption("student")} className="p-3 hover:bg-purple-100 dark:hover:bg-gray-600 cursor-pointer flex items-center gap-2">
                    <FaUserGraduate /> Student
                  </li>
                  <li onClick={() => handleLoginOption("admin")} className="p-3 hover:bg-purple-100 dark:hover:bg-gray-600 cursor-pointer flex items-center gap-2">
                    <FaUserShield /> Admin
                  </li>
                  <li onClick={() => handleLoginOption("faculty")} className="p-3 hover:bg-purple-100 dark:hover:bg-gray-600 cursor-pointer flex items-center gap-2">
                    <FaChalkboardTeacher /> Faculty
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Transforming Learning <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
              For the Future
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your digital gateway to immersive education, real-time interaction, and global mentorship.
          </p>
          <a
            href="#why"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-white font-semibold rounded-2xl shadow-md hover:scale-105 transition"
          >
            Learn More
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="./student.jpg" alt="student" className="rounded-3xl shadow-lg w-full max-w-md animate-fade-in" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-12">✨ Why Choose EduVerse?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Interactive Courses",
              desc: "Real-time sessions, quizzes & AI-based evaluations.",
              icon: "📚"
            },
            {
              title: "Expert Mentors",
              desc: "Learn from certified professionals and PhDs.",
              icon: "👩‍🏫"
            },
            {
              title: "Flexible Learning",
              desc: "Anytime, anywhere access with cloud sync.",
              icon: "🌍"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-20">
        © {new Date().getFullYear()} EduVerse. All rights reserved.
      </footer>
    </div>
  );
}
