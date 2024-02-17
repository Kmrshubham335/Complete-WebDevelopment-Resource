import express from 'express'
import connectDB from './db/connect.js'
const app = express()
const port = '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"
import {mixDoc} from './Models/Student.js'
connectDB(DATABASE_URL)

// getDocByField()
mixDoc()
app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})