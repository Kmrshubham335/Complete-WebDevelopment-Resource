import express from 'express'
const router = express.Router()
import {Home} from '../Controller/HomeController.js'
import { About } from '../Controller/AboutController.js'

router.use('/',Home)
router.use('/About',About)

export default router