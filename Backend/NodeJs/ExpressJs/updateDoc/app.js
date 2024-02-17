import express from 'express'
import connectDB from './db/connect.js'
import { updateOneDoc } from './models/student.js'
const app = express()
const port = '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)
updateOneDoc('65ce0ced7356bf21d46351e8')
app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})