import express from 'express'
import connectDB from './db/connection.js'
import web from '../CURD/routes/web.js'
const app = express()
const port = '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use('/',web)


app.listen(port ,()=>{
    console.log(`Server Listening at http://localhost:${port}`)
})