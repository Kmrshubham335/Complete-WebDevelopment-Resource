import express from 'express'
const app = express()
const port = '3000'
import database from '../Mongoose/db/connect.js'

database()

app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})