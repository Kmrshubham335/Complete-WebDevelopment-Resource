import express from 'express'
const router = express.Router()
import {allStudent,deleteStudent} from '../Controllers/Student_Controller.js'

router.get('/All',allStudent)
router.get('/Delete/:id([0-9]{2})',deleteStudent)
export default router
