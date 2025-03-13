import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
// import connectdb
import dbConnect from "./config/dbConnect.js";
// routes
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

dbConnect().catch(err => console.error('Failed to connect to MongoDB:', err));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});