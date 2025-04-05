import React, { useState } from "react";
import { Bell, User, Book, BarChart3, Settings } from "lucide-react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { useAuthStore } from "../contentStore/authStore";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

export default function Admin() {
  const [activeTab, setActiveTab] = useState("user");
  const { logout } = useAuthStore();
  const fakeUserData = [
    { id: 1, name: "John Doe", role: "Student", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Faculty", status: "Inactive" },
    { id: 3, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 4, name: "Bob Brown", role: "Student", status: "Pending" },
    { id: 5, name: "Charlie Davis", role: "Student", status: "Active" },
    { id: 6, name: "Emily White", role: "Faculty", status: "Inactive" },
    { id: 7, name: "Frank Green", role: "Admin", status: "Active" },
    { id: 8, name: "Grace Black", role: "Student", status: "Pending" },
    { id: 9, name: "Hannah Blue", role: "Student", status: "Active" },
    { id: 10, name: "Ian Yellow", role: "Faculty", status: "Inactive" },
  ];

  const courseData = [
    { id: 1, title: "React Basics", enrolled: 120 },
    { id: 2, title: "Advanced JavaScript", enrolled: 80 },
    { id: 3, title: "UI/UX Design", enrolled: 150 },
    { id: 4, title: "Python for Data Science", enrolled: 200 },
    { id: 5, title: "Machine Learning", enrolled: 180 },
    { id: 6, title: "Cloud Computing", enrolled: 90 },
    { id: 7, title: "Cybersecurity Fundamentals", enrolled: 110 },
    { id: 8, title: "DevOps Essentials", enrolled: 130 },
    { id: 9, title: "Database Management", enrolled: 140 },
    { id: 10, title: "AI Ethics", enrolled: 70 },
  ];

  const pieData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "User Status",
        data: [5, 3, 2],
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
        backgroundColor: [
          "#ff79c6",
          "#bd93f9",
          "#8be9fd",
          "#50fa7b",
          "#ffb86c",
          "#ff5555",
          "#f1fa8c",
          "#6272a4",
          "#8be9fd",
          "#ff79c6",
        ],
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

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeInOutBounce",
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "user":
        return (
          <section className="glass-card animated-section">
            <h2 className="section-title">User Management</h2>
            <p>Manage faculty and student accounts with detailed insights.</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {fakeUserData.map((user) => (
                  <tr key={user.id} className="table-row">
                    <td>{user.id}</td>
                    <td className="name-cell">{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <span
                        className={`status-badge ${user.status.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="chart-container">
              <div className="pie-chart">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
          </section>
        );
      case "course":
        return (
          <section className="glass-card">
            <h2 className="section-title">Course Management</h2>
            <p>Track course enrollments and manage course content.</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Title</th>
                  <th>Enrolled Students</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((course) => (
                  <tr key={course.id} className="table-row">
                    <td>{course.id}</td>
                    <td className="name-cell">{course.title}</td>
                    <td>{course.enrolled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="chart-container">
              <Bar data={barData} options={pieOptions} />
            </div>
          </section>
        );
      case "report":
        return (
          <section className="glass-card">
            <h2 className="section-title">Reports & Analytics</h2>
            <p>View system-wide analytics and performance metrics.</p>
            <div className="chart-container">
              <Bar data={barData} options={pieOptions} />
            </div>
          </section>
        );
      case "monitor":
        return (
          <section className="glass-card">
            <h2 className="section-title">System Monitoring</h2>
            <p>Monitor server health, live metrics, and audit logs.</p>
            <div className="chart-container">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </section>
        );
      case "announce":
        return (
          <section className="glass-card">
            <h2 className="section-title">Progress</h2>
            <p>Track student progress over time with detailed graphs.</p>
            <div className="chart-container">
              <Line data={lineData} options={pieOptions} />
            </div>
          </section>
        );
      default:
        return null;
    }
  };
  const handleSignOut = () => {
    console.log("heyy");
    logout();
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 p-6 text-white font-inter">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
          Admin Control Nexus
        </h1>
        <button
          onClick={handleSignOut}
          className="border border-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition font-semibold shadow-lg"
        >
          Logout
        </button>
      </header>

      <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 shadow-2xl">
        <button
          onClick={() => setActiveTab("user")}
          className={`tab-btn flex justify-center items-center gap-x-[1rem] ${
            activeTab === "user" ? "active-tab" : "hover:bg-gray-600"
          }`}
        >
          <User className="w-5 h-5" /> User Mgmt
        </button>
        <button
          onClick={() => setActiveTab("course")}
          className={`tab-btn flex justify-center items-center gap-x-[1rem] ${
            activeTab === "course" ? "active-tab" : "hover:bg-gray-600"
          }`}
        >
          <Book className="w-5 h-5" /> Courses
        </button>
        <button
          onClick={() => setActiveTab("report")}
          className={`tab-btn  flex justify-center items-center gap-x-[1rem]${
            activeTab === "report" ? "active-tab" : "hover:bg-gray-600"
          }`}
        >
          <BarChart3 className="w-5 h-5" /> Reports
        </button>
        <button
          onClick={() => setActiveTab("monitor")}
          className={`tab-btn flex justify-center items-center gap-x-[1rem] ${
            activeTab === "monitor" ? "active-tab" : "hover:bg-gray-600"
          }`}
        >
          <Settings className="w-5 h-5" /> Monitor
        </button>
        <button
          onClick={() => setActiveTab("announce")}
          className={`tab-btn flex justify-center items-center gap-x-[1rem] ${
            activeTab === "announce" ? "active-tab" : "hover:bg-gray-600"
          }`}
        >
          <Bell className="w-5 h-5" /> Progress
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
        .animated-section {
          animation: fadeIn 0.5s ease-in-out;
        }
        .section-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #ff79c6;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        .data-table th,
        .data-table td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .data-table th {
          color: #ff79c6;
          font-weight: bold;
        }
        .table-row:hover {
          background: rgba(255, 255, 255, 0.1);
          transition: background 0.3s ease;
        }
        .name-cell {
          font-weight: bold;
          color: #8be9fd;
        }
        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: bold;
          text-transform: capitalize;
        }
        .status-badge.active {
          background-color: #4caf50;
          color: white;
        }
        .status-badge.inactive {
          background-color: #f44336;
          color: white;
        }
        .status-badge.pending {
          background-color: #ff9800;
          color: white;
        }
        .chart-container {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }
        .pie-chart {
          width: 300px;
          height: 300px;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
