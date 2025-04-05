import React, { useState } from "react";
import { FaStore, FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { Undo2, UserPen } from "lucide-react";
import { useAuthStore } from "../contentStore/authStore";
function Signup() {
  const { signup } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { role } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userType:role,
      username: username,
      email: email,
      password: password,
    };
    console.log("Data-->", formData);
    signup(formData);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-700 to-green-700">
        <NavLink to={'/'} className="font-bold absolute top-5 left-10 rounded-2xl ring-2 hover:bg-amber-800 w-12 flex justify-center" >
          <Undo2 size={32} color="yellow" strokeWidth={2.5}   />
        </NavLink>
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700">
            {` Sign up for ${role}`}
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Manage your carbon footprint efficiently !!!
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaStore className="text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <NavLink
              to={`/signin/${role}`}
              className="text-green-600 font-semibold"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
