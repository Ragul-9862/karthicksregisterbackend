import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config(); // 🔥 MUST BE FIRST

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", userRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// start server
app.listen(5000, () => console.log("🚀 Server running on 5000"));