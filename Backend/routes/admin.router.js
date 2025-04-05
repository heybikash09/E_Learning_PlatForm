import express from 'express'
import { addCourse, getFaculties, getStudentFeedback, getStudents } from '../controller/admin.controller.js'
const router=express.Router()

 router.post('/addCourse',addCourse)
 router.get('/getStudents',getStudents)
 router.get('/getFaculties',getFaculties)
 router.get('/getStudentFeedback',getStudentFeedback)
 
 export default router