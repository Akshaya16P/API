// import express from 'express';
// import { addStudents, deletestudents, getStudents,  updatestudents } from '../controllers/studentControllers.js';
// const router=express.Router();
// router.get('/get-students',getStudents);
// router.post('/add-students',addStudents);
// router.put('/edit-students',updatestudents);
// router.delete('/delete-students',deletestudents);
// export default router;


// import express from 'express';
// const router = express.Router();
// import {getStudentsDetails,addStudents} from '../controllers/studentsController.js';

// router.get('/get-students', getStudentsDetails);
// router.post('/add-students', addStudents);

// export default router;

const express = require("express");
const {
  getStudentsDetails,
  addStudents
} = require("../controllers/studentsController.js");

const router = express.Router();

router.get("/students", getStudentsDetails);
router.post("/students", addStudents);

module.exports = router;
