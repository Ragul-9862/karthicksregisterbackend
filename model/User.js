import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  session: String,
  height: Number,
  weight: Number,
  goalMin: Number,
  goalMax: Number,
  medical: Boolean,
  medicalText: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", userSchema);