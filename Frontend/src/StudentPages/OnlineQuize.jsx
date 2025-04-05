import React from 'react';
import { NavLink } from 'react-router-dom';

const quizzes = [
  { 
    name: "General Knowledge", 
    creator: "John Doe", 
    startTime: "10:00 AM", 
    endTime: "11:00 AM", 
    path: "/quiz/general-knowledge" 
  },
  { 
    name: "Science & Technology", 
    creator: "Dr. Smith", 
    startTime: "12:00 PM", 
    endTime: "1:00 PM", 
    path: "/quiz/science" 
  },
  { 
    name: "Mathematics", 
    creator: "Prof. Alan", 
    startTime: "2:00 PM", 
    endTime: "3:00 PM", 
    path: "/quiz/mathematics" 
  },
  { 
    name: "Programming & Coding", 
    creator: "Tech Mentor", 
    startTime: "4:00 PM", 
    endTime: "5:00 PM", 
    path: "/quiz/programming" 
  },
  {
    name: "AI & Machine Learning",
    creator: "Dr. Neha Mehta",
    startTime: "5:30 PM",
    endTime: "6:30 PM",
    path: "/quiz/ai"
  },
  {
    name: "World History",
    creator: "Historian Club",
    startTime: "7:00 PM",
    endTime: "8:00 PM",
    path: "/quiz/history"
  }
];

const OnlineQuiz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 mb-10 drop-shadow-md">
        ✨ Online Quizzes
      </h1>

      <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <li
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-1">{quiz.name}</h2>
            <p className="text-sm text-gray-200">
              Created by: <span className="text-white font-semibold">{quiz.creator}</span>
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Time: <span className="text-white font-medium">{quiz.startTime} - {quiz.endTime}</span>
            </p>
            <NavLink 
              to={'/quizqna'}
              className="mt-4 inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-yellow-500 text-white font-semibold rounded-xl transition duration-300"
            >
              🚀 Attend Quiz
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineQuiz;
