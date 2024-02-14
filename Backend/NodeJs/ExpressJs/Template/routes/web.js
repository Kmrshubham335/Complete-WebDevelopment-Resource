import express from 'express'
const router = express.Router()
import {home} from '../Controller/HomeController.js'
import {aboutController} from '../Controller/AboutController.js'
router.get('/',home)
router.get('/about',aboutController)

export  default router