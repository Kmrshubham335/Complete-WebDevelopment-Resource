import express from 'express'
const router = express.Router()
router.get('/All',(req,res)=>{
    res.send("Student Page All")
})
router.post('/create',(req,res)=>{
    res.send("Student Page Created")
})
router.put('/updated',(req,res)=>{
    res.send("Student Page updated")
})
router.delete('/Delete',(req,res)=>{
    res.send("Student Page  Delete")
})

//Exporting 
export default router