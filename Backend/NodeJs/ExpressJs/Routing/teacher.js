import express from 'express'
const router = express.Router()
router.get('/All',(req,res)=>{
    res.send("Teacher Page All")
})
router.post('/create',(req,res)=>{
    res.send("Teacher Page Created")
})
router.put('/updated',(req,res)=>{
    res.send("Teacher Page updated")
})
router.delete('/Delete',(req,res)=>{
    res.send("Teacher Page  Delete")
})
export default router
