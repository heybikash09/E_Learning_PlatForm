import React, { useState } from "react";
import { Bell, User, Book, BarChart3, Settings } from "lucide-react";
import { Pie, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useAuthStore } from "../contentStore/authStore";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState("user");
  const { logout } = useAuthStore();
  const handleSignOut = () => {
    console.log("heyy");
    logout();
  };
  const fakeUserData = [
    { id: 1, name: "John Doe", role: "Student", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Student", status: "Inactive" },
    { id: 3, name: "Alice Johnson", role: "Student", status: "Active" },
    { id: 4, name: "Bob Brown", role: "Student", status: "Pending" },
    { id: 5, name: "Charlie Davis", role: "Student", status: "Active" },
    { id: 6, name: "John Doe", role: "Student", status: "Active" },
    { id: 7, name: "Jane Smith", role: "Student", status: "Inactive" },
    { id: 8, name: "Alice Johnson", role: "Student", status: "Active" },
  ];

  const courseData = [
    { id: 1, title: "React Basics", enrolled: 120 },
    { id: 2, title: "Advanced JavaScript", enrolled: 80 },
    { id: 3, title: "UI/UX Design", enrolled: 150 },
    { id: 4, title: "Java", enrolled: 1988 },
    { id: 5, title: "Python", enrolled: 800 },
    { id: 6, title: "C", enrolled: 450 },
    { id: 7, title: "AI/ML", enrolled: 210 },
    { id: 8, title: "Figma basics", enrolled: 881 },
    { id: 9, title: "C#", enrolled: 113 },
    { id: 10, title: "Canva", enrolled: 254 },
    { id: 11, title: "SQL", enrolled: 769 },
    { id: 12, title: "Backend Dev", enrolled: 1009 },
  ];

  const pieData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "User Status",
        data: [3, 1, 1],
        backgroundColor: ["#4caf50", "#f44336", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: courseData.map((course) => course.title),
    datasets: [
      {
        label: "Enrolled Students",
        data: courseData.map((course) => course.enrolled),
        backgroundColor: ["#ff79c6", "#bd93f9", "#8be9fd"],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Student Progress (%)",
        data: [20, 40, 60, 80, 100],
        borderColor: "#50fa7b",
        backgroundColor: "rgba(80, 250, 123, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "user":
        return (
          <div className="glass-card">
            <h2 className="section-title">User Management</h2>
            <p className="text-gray-300">
              Manage student accounts with detailed insights.
            </p>
            <table className="w-full mt-4 border-collapse border border-gray-700">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="border border-gray-700 px-4 py-2">ID</th>
                  <th className="border border-gray-700 px-4 py-2">Name</th>
                  <th className="border border-gray-700 px-4 py-2">Role</th>
                  <th className="border border-gray-700 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {fakeUserData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-700 ">
                    <td className="border text-center  border-gray-700 px-4 py-2">
                      {user.id}
                    </td>
                    <td className="border text-center border-gray-700 px-4 py-2">
                      {user.name}
                    </td>
                    <td className="border text-center border-gray-700 px-4 py-2">
                      {user.role}
                    </td>
                    <td className="border text-center border-gray-700 px-4 py-2">
                      <span
                        className={`px-2 py-1  rounded text-white ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : user.status === "Inactive"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-center">
              <div className="chart-wrapper">
                <Pie data={pieData} />
              </div>
            </div>
          </div>
        );
      case "course":
        return (
          <div className="glass-card">
            <h2 className="section-title">Course Management</h2>
            <p className="text-gray-300">
              Track course enrollments and manage course content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {courseData.map((course) => (
                <div
                  key={course.id}
                  className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-400">Enrolled: {course.enrolled}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "report":
        return (
          <div className="glass-card">
            <h2 className="section-title">Reports & Analytics</h2>
            <p className="text-gray-300">
              View system-wide analytics and performance metrics.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="chart-wrapper">
                <Bar data={barData} />
              </div>
            </div>
          </div>
        );
      case "monitor":
        return (
          <div className="glass-card">
            <h2 className="section-title">System Monitoring</h2>
            <p className="text-gray-300">
              Monitor server health, live metrics, and audit logs.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="chart-wrapper">
                <Line data={lineData} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-cyan-400">Faculty Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
        >
          Logout
        </button>
      </header>
      <nav className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("user")}
          className={`px-4 py-2 rounded-lg shadow ${
            activeTab === "user"
              ? "bg-cyan-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          <User className="inline-block w-5 h-5 mr-2" /> student Mgmt
        </button>
        <button
          onClick={() => setActiveTab("course")}
          className={`px-4 py-2 rounded-lg shadow ${
            activeTab === "course"
              ? "bg-cyan-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          <Book className="inline-block w-5 h-5 mr-2" /> Courses
        </button>
        <button
          onClick={() => setActiveTab("report")}
          className={`px-4 py-2 rounded-lg shadow ${
            activeTab === "report"
              ? "bg-cyan-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          <BarChart3 className="inline-block w-5 h-5 mr-2" /> Reports
        </button>
        <button
          onClick={() => setActiveTab("monitor")}
          className={`px-4 py-2 rounded-lg shadow ${
            activeTab === "monitor"
              ? "bg-cyan-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          <Settings className="inline-block w-5 h-5 mr-2" /> Monitor
        </button>
      </nav>
      {renderTabContent()}

      <style jsx>{`
        .glass-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.1)
          );
          border-radius: 1.5rem;
          padding: 2rem;
          margin-top: 2rem;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .section-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #ff79c6;
        }
        .chart-wrapper {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </div>
  );
}
