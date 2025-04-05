import React, { useState } from 'react';

const FeedbackForm = () => {
  const [teacherName, setTeacherName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const teachers = ["Mr. Sharma", "Ms. Gupta", "Dr. Patel", "Prof. Rao", "Mrs. Verma"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ teacherName, feedback, rating });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setTeacherName('');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-pink-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-10 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-6 animate-pulse">
          ✨ Teacher Feedback
        </h2>

        {submitted && (
          <div className="text-green-600 text-center mb-4 font-semibold">
            ✅ Feedback submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="teacherName">
              👨‍🏫 Select Teacher
            </label>
            <select
              id="teacherName"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 transition"
            >
              <option value="" disabled>Select a teacher</option>
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>{teacher}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="feedback">
              💬 Your Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">⭐ Rate the Experience</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-4xl transition-all duration-200 ${
                    rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition shadow-md hover:shadow-lg"
          >
            🚀 Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
