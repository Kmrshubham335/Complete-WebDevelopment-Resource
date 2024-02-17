import express from 'express'
import connectDB from './db/connect.js'
import './Models/Student.js'
const app = express()
const port = '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)

app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})