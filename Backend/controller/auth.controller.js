import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js"; // Adjust the import if needed
import { generateDefaultToken } from "../utils/generateTokens.js";

export async function signup(req, res) {
  try {
    const { username, email, password, userType } = req.body;
    console.log("Signup ->", username, email, userType);
    if (!username || !email || !password || !userType) {
      return res.status(400).json({
        status: false,
        message: "All fields (username, email, password, userType) are required.",
      });
    }

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailReg.test(email)) {
      return res.status(400).json({ status: false, message: "Invalid email address." });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ status: false, message: "Username already exists." });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ status: false, message: "Email already exists." });
    }

    if (password.length < 6) {
      return res.status(400).json({
        status: false,
        message: "Password must be at least 6 characters long.",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      userType,
      list: [], // Set empty list for now; you can populate it later based on userType
    });

    await newUser.save();

    generateDefaultToken(newUser._id, res);

    return res.status(201).json({
      status: true,
      message: "Signup successful.",
      user: { ...newUser._doc, password: "" },
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ status: false, message: "Internal server error." });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields must be filled." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials (email)." });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials (password)." });
    }

    generateDefaultToken(user._id, res);

    return res.status(200).json({
      status: true,
      message: "Login successful.",
      user: { ...user._doc, password: "" },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("jwt-chainOptimization");
    res.status(200).json({ success: true, message: "Logged out successfully." });
  } catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

export const authCheck = async (req, res) => {
  try {
    console.log("boom")
    res.status(200).json({ status: true, user: req.user });
  } catch (err) {
    console.error("AuthCheck Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
