import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {

      return res.status(400).json({ 
        success: false,
        message: "User already exists" });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student', 
    });

    res.status(201).json({ 
        success: true,
        message: "User registered successfully", 
        });

  } catch (error) {
    res.status(500).json({ 
        success: false,
        message: "Failed to register" });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: "User not found" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid Email or Password " });
    }

    generateToken(res,user,`Welcome back ${user.name}`);
    res.status(200).json({ 
        success: true,
        message: "Login successful", 
        user });

  } catch (error) {
    res.status(500).json({ 
        success: false,
        message: "Failed to login" });
  }
}