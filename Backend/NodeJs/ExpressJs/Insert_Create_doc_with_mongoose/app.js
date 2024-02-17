import express from 'express'
import connectDB from './db/connect.js'
import { updateOneDoc } from '../updateDoc/models/student.js'
const app = express()
const port = '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)

// updateDocById("65ce0ced7356bf21d46351e8")
const user_id ='65cf38cab7cac6b238abc5a8'
updateOneDoc(user_id)

app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})