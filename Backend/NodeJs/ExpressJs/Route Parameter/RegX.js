//Route Parameter with RegX
import express from 'express'
const app = express()
const port = '3000'

app.get('/detail/delete/:id([0-9]{2})',(req,res)=>{
    res.send('Parameter details  is delete')
    const id = req.params
    console.log("Id has been deleted")
})








app.get('/flight/:from-/:to-/:On',(req,res)=>{
    const {from,to} =req.params
    res.send(`Flight from ${req.params.from} to ${req.params.On} At ${req.params.On}`)
})