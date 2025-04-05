import React from 'react';
import { Bookmark, Clock, Award, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      icon: <Bookmark className="h-6 w-6 text-pink-500" />,
      label: 'Enrolled Courses',
      value: '12',
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      label: 'Hours Learned',
      value: '148',
      gradient: 'from-yellow-400 to-orange-400',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      label: 'Certificates',
      value: '5',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] pt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl shadow-lg backdrop-blur-sm bg-opacity-30 transform hover:scale-[1.02] transition duration-300`}
            >
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-full shadow-inner">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-white/80">{stat.label}</p>
                  <p className="text-3xl font-bold text-white drop-shadow">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-tr from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white drop-shadow">Current Courses</h2>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src="./student.jpg"
                      alt="Course"
                      className="w-12 h-12 rounded-lg object-cover border-2 border-white/20"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-white">Web Development Fundamentals</h3>
                      <p className="text-sm text-white/60">Progress: 75%</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-white/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div className="bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/30 p-6 rounded-2xl shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow">Upcoming Deadlines</h2>
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="mb-4 last:mb-0 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="font-semibold text-white">Assignment {index + 1}</h3>
                <p className="text-sm text-white/70">Due in 2 days</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-yellow-300/30 text-yellow-100 px-2 py-1 rounded-full">
                    Pending
                  </span>
                  <button className="text-sm font-semibold text-white hover:text-yellow-300 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
