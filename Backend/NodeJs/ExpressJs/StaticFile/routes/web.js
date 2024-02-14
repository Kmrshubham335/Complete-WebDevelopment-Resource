import express from 'express'
const router = express.Router()
import {home} from '../Controller/Home.js'

router.get('/',home)
export default router