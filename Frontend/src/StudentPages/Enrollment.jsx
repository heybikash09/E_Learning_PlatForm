import React from 'react';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    title: "Advanced Web Technology",
    instructor: "John Doe",
    duration: "12 weeks",
    students: 1234,
    image: './student.jpg',
  },
  {
    title: "Data Science Fundamentals",
    instructor: "Jane Smith",
    duration: "10 weeks",
    students: 856,
    image: './student.jpg',
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Mike Johnson",
    duration: "8 weeks",
    students: 567,
    image: './student.jpg',
  },
  {
    title: "Machine Learning Basics",
    instructor: "Alice Brown",
    duration: "14 weeks",
    students: 1023,
    image: './student.jpg',
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Robert Green",
    duration: "6 weeks",
    students: 745,
    image: './student.jpg',
  },
  {
    title: "Cloud Computing with AWS",
    instructor: "Sam Walters",
    duration: "9 weeks",
    students: 620,
    image: './student.jpg',
  },
  {
    title: "Mobile App Development",
    instructor: "Kelly Tran",
    duration: "11 weeks",
    students: 980,
    image: './student.jpg',
  },
  {
    title: "AI & Deep Learning",
    instructor: "Dr. Neha Verma",
    duration: "15 weeks",
    students: 1130,
    image: './student.jpg',
  },
];

const Enrollment = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 via-pink-200 to-yellow-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-pulse">
          🚀 Explore & Enroll in Premium Courses
        </h1>
        <p className="mt-2 text-lg text-gray-600">Learn from industry experts & elevate your skills</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {featuredCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-5 transform transition hover:scale-105 hover:shadow-2xl border border-transparent hover:border-indigo-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-xl w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-indigo-700">{course.title}</h2>
            <p className="text-gray-600 mt-1">👩‍🏫 {course.instructor}</p>
            <p className="text-sm text-gray-500">🕒 {course.duration} &nbsp; | &nbsp; 👥 {course.students} students</p>

            <button className="mt-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition duration-300 shadow-md">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrollment;
