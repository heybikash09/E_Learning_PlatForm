import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Reference to User (who is a faculty)
    required: true,
  },
  duration: {
    type: String, // e.g. "6 weeks" or "12 hours"
    required: true,
  },
  description: {
    type: String,
  },
  pdfs: [
    {
      title: String,
      url: String, // Cloud storage / local file path
    },
  ],
  videos: [
    {
      title: String,
      url: String,
    },
  ],
  quizzes: [
    {
        question: {
          type: String,
          required: true,
        },
        options: {
          type: [String], // <--- options as array
          required: true,
        },
        correctAnswer: {
          type: String,
          required: true,
        },
      },
  ],
},
{
  timestamps: true,
});
export const Course = mongoose.model("Course", courseSchema);
