import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Dickens', 'Chaucer', 'Rowling'],
    answer: 'Shakespeare',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    answer: 'H2O',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Mars',
  },
  {
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    answer: 'Pacific',
  },
  {
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'Python', 'CSS', 'Java'],
    answer: 'CSS',
  },
  {
    question: 'Who discovered gravity?',
    options: ['Albert Einstein', 'Galileo', 'Isaac Newton', 'Kepler'],
    answer: 'Isaac Newton',
  },
];

const QuizQna = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [visited, setVisited] = useState(new Set([0]));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleNavigate = (newIndex) => {
    setCurrentIndex(newIndex);
    setVisited((prev) => new Set(prev).add(newIndex));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Submitted Answers:', answers);
  };

  const hasVisitedAll = visited.size === questions.length;

  return (
    <div className="min-h-screen px-6 py-12 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <div className="bg-white/20 backdrop-blur-2xl text-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-full max-w-4xl transition-all duration-300 transform hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 mb-6">
          ✨ Quick Quiz Challenge
        </h1>

        {!submitted ? (
          <>
            <div className="mb-6">
              <p className="text-2xl font-semibold mb-4">
                {`Q${currentIndex + 1}: ${questions[currentIndex].question}`}
              </p>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`w-full px-6 py-3 rounded-xl text-left font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                      answers[currentIndex] === option
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-white/10 border border-white/30 hover:bg-white/20'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => handleNavigate(Math.max(currentIndex - 1, 0))}
                disabled={currentIndex === 0}
                className="px-6 py-2 font-medium rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-30 transition"
              >
                ⬅ Previous
              </button>

              <button
                onClick={() =>
                  handleNavigate(Math.min(currentIndex + 1, questions.length - 1))
                }
                disabled={currentIndex === questions.length - 1}
                className="px-6 py-2 font-medium rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-30 transition"
              >
                Next ➡
              </button>
            </div>

            {hasVisitedAll && (
              <div className="text-center mt-10 animate-bounce">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-emerald-500 hover:to-green-700 text-white px-8 py-3 rounded-2xl font-bold transition duration-300 transform hover:scale-105"
                >
                  🚀 Submit Answers
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-green-300">✅ Quiz Submitted!</h2>
            <p className="text-lg">
              You answered{' '}
              <span className="font-bold text-yellow-200">
                {answers.filter((a) => a !== null).length}
              </span>{' '}
              out of <span className="font-bold">{questions.length}</span> questions.
            </p>
            <p className="text-sm text-white/80">
              Check your console to review the answers 🧠
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQna;
