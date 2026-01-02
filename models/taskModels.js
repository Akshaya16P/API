import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    rollNo: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    collegeName: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
