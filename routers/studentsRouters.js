// import express from "express";
// import {
//   getStudentByRoll,
//   addStudents,
//   getStudentsFilter,
//   updateStudentByRoll
// } from "../controllers/studentsController.js";

// const router = express.Router();
// router.get("/students/:stdRoll", getStudentByRoll);
// router.get("/students", getStudentsFilter);
// router.post("/students", addStudents);
// router.put("/student/:stdRoll", updateStudentByRoll);
// router.put("/student/:id", updateStudentByRoll);


// export default router;


import express from 'express';
const router = express.Router();

import { 
    getStudentsFilter,
    addStudents
} from '../controllers/studentsController.js';

router.get('/get-students', getStudentsFilter);
router.post('/add-students', addStudents);

export default router;




//post , get , edit , delete

//make a front end form to add student details i.e. name, rollno, location, age, branch, college name
//on submit send the data to backend using post request
//store the data in mongodb database
//make a get request to fetch all student details and display it on frontend in tabular form, it should be displayed below the form as cards 
// each card should have view button
// when clicked to the view button it should display all the details of that student in another page( clicking the view button means it has the unique id of that student)
// make an edit and delete button on each card to delete or edit that student details from the database

