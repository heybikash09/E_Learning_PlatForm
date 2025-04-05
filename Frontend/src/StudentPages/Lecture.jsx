import React from 'react';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    title: "Advanced Web Technology",
    instructor: "John Doe",
    duration: "12 weeks",
    students: 1234,
    image: "./computer.jpg",
  },
  {
    title: "Data Science Fundamentals",
    instructor: "Jane Smith",
    duration: "10 weeks",
    students: 856,
    image: "./student.jpg",
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Mike Johnson",
    duration: "8 weeks",
    students: 567,
    image: "./computer.jpg",
  },
  {
    title: "Machine Learning Basics",
    instructor: "Alice Brown",
    duration: "14 weeks",
    students: 1023,
    image: "./student.jpg",
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Robert Green",
    duration: "6 weeks",
    students: 745,
    image: "./computer.jpg",
  },
  {
    title: "Blockchain and Web3",
    instructor: "Elena Torres",
    duration: "9 weeks",
    students: 643,
    image: "./student.jpg",
  },
  {
    title: "React Native Crash Course",
    instructor: "Chris Evans",
    duration: "7 weeks",
    students: 900,
    image: "./computer.jpg",
  },
  {
    title: "Ethical Hacking 101",
    instructor: "Sara Lee",
    duration: "5 weeks",
    students: 732,
    image: "./student.jpg",
  }, {
    title: "Data Science Fundamentals",
    instructor: "Jane Smith",
    duration: "10 weeks",
    students: 856,
    image: "./student.jpg",
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Mike Johnson",
    duration: "8 weeks",
    students: 567,
    image: "./computer.jpg",
  },
  {
    title: "Machine Learning Basics",
    instructor: "Alice Brown",
    duration: "14 weeks",
    students: 1023,
    image: "./student.jpg",
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Robert Green",
    duration: "6 weeks",
    students: 745,
    image: "./computer.jpg",
  },
];

const Lecture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 mb-10 text-center drop-shadow">
        Featured Lectures
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {featuredCourses.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/10 hover:scale-[1.02] transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-white">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-sm text-white/70 mt-1">By {course.instructor}</p>
              <p className="text-sm text-white/60 mt-1">Duration: {course.duration}</p>
              <p className="text-sm text-white/60 mt-1">{course.students} students</p>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-semibold rounded-xl transition duration-300">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecture;
