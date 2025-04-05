import mongoose from "mongoose";

// Subdocument for list item
const listItemSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["student", "faculty", "admin"], required: true },
    data: mongoose.Schema.Types.Mixed // You can store anything, and validate manually in logic
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ["student", "faculty", "admin"],
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  list: {
    type: [listItemSchema],
    default: []
  }
});

export const User = mongoose.model("User", userSchema);
