import express from 'express'
import { addLectureASSIGNMENT, addLecturePDFS, addLectureQUIZ, addLectureVIDEOS, getSubjects } from '../controller/faculty.controller.js'
const router=express.Router()

 router.post('/addLecturePDFS',addLecturePDFS)
 router.post('/addLectureVIDEOS',addLectureVIDEOS)
 router.post('/addLectureASSIGNMENT',addLectureASSIGNMENT)
 router.post('/addLectureQUIZ',addLectureQUIZ)
 router.get('/getSubjects',getSubjects)
 export default router