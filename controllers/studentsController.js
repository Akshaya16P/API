import student from "../models/studentsModels.js";

/**
 * GET all students from MongoDB
 */
const getStudentsDetails = async (req, res) => {
  try {
    const students = await student.find(); // fetch data from DB
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * ADD a new student to MongoDB
 */
const addStudents = async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data:", data);

    // create is correct for single object
    const addedData = await student.create(data);
    console.log("Saved data:", addedData);

    res.status(201).json("data added");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getStudentsDetails, addStudents };


// const student = require("../models/studentsModels.js");

// const getStudentsDetails = (req, res) => {
//   const mydata = { name: "thub", roll: "1234" };
//   res.send(mydata);
// };

// const addStudents = async (req, res) => {
//   try {
//     const data = req.body;
//     const addeddata = await student.insertMany(data);
//     res.status(201).json("data added");
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { getStudentsDetails, addStudents };

