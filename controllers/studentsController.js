import student from "../models/studentsModels.js";

const getStudentByRoll = async (req, res) => {
  try {
    const { stdRoll } = req.params;
    const studentData = await student.findOne({
      stdRoll: Number(stdRoll)
    });

    if (!studentData) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST add student
const addStudents = async (req, res) => {
  try {
    const addedData = await student.create(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: addedData
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET with query filter
const getStudentsFilter = async (req, res) => {
  try {
    const { stdRoll, stdPhone } = req.query;

    const query = {};

    if (stdRoll) {
      query.stdRoll = Number(stdRoll);
    }

    if (stdPhone) {
      query.stdPhone = Number(stdPhone);
    }

    const students = await student.find(query);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateStudentByRoll = async (req, res) => {
  try {
    const { id } = req.params;
    // const updatedStudent = await student.findOneAndUpdate(
    //   { stdRoll: Number(stdRoll) },
    //   req.body,
    //   { new: true, runValidators: true }
    // );

    // ✅ NEW METHOD (by MongoDB _id)
    const updatedStudent = await student.findByIdAndUpdate(
      id,                   // MongoDB _id from URL
      { $set: req.body },   // safe update
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getStudentByRoll,
  addStudents,
  getStudentsFilter,
  updateStudentByRoll
};
