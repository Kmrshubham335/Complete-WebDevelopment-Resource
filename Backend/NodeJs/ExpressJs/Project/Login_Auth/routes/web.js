import express from 'express'
import user from '../controller/user.js'

const router = express.Router()
router.get('/',user.home)
router.get('/registration',user.registration)
router.post('/registration',user.createUserDoc)
router.get('/login',user.login)
router.post('/login',user.verifyLogin)

export default router