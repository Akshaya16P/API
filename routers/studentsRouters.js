import express from "express";
import {
  getStudentByRoll,
  addStudents,
  getStudentsFilter
} from "../controllers/studentsController.js";

const router = express.Router();

// GET student by roll number (params)
router.get("/students/:stdRoll", getStudentByRoll);

// GET students using query params (?stdRoll=102&stdPhone=9876543210)
router.get("/students", getStudentsFilter);

// POST add a new student
router.post("/students", addStudents);

export default router;
