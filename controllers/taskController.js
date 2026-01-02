import Task from "../models/taskModels.js";

export const addTask = async (req, res) => {
  try {
    const {
      name,
      rollNo,
      location,
      age,
      branch,
      collegeName
    } = req.body;

    const task = new Task({
      name,
      rollNo,
      location,
      age,
      branch,
      collegeName
    });

    await task.save();

    console.log("Student saved:", task);

    res.status(201).json({
      message: "Student added successfully",
      task
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding student",
      error: error.message
    });
  }
};
