import express from 'express'
const router = express.Router()
import {homeController } from '../Controller/HomeController.js'
import {AboutController} from '../Controller/Aboutcontroller.js'
import {StudentController} from '../Controller/StundetController.js'



router.get('/',homeController)
router.get('/About',AboutController)
router.get('/Student',StudentController)
export default router