import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../utils/auth.js";


export const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
