import express from 'express';
import { addStudents, getStudents } from '../controllers/studentControllers.js';
const router=express.Router();
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);

export default router;