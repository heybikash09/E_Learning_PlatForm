import React from 'react';
import { Clock, Users } from "lucide-react";

const CourseCard = ({ title, instructor, duration, students, image , button }) => {
  // Truncate title if it's longer than 25 characters
  const truncatedTitle = title.length > 25 ? title.slice(0, 22) + "..." : title;

  return (
    <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-md rounded-xl hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="object-cover w-full h-48 rounded-t-xl" />
        <div className="absolute top-0 right-0 px-3 py-1 text-white bg-gray-700 rounded-bl-lg">
          Featured
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900" title={title}>
          {truncatedTitle}
        </h3>
        <p className="mb-3 text-gray-600">by {instructor}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{students} students</span>
          </div>
        </div>
        <button className="w-full px-4 py-2 mt-4 text-white transition-colors duration-300 bg-gray-700 rounded-lg hover:bg-gray-800">
         {button}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;