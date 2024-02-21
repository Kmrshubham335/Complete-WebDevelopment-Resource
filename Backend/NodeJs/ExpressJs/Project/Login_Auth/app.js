import express from 'express'
import connectDb from './db/connectDB.js'
import web from './routes/web.js'
const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDb(DATABASE_URL)


app.set('view engine','ejs')

app.use(express.urlencoded({extended: true}))
app.use('/',web)

app.listen(port ,()=>{
    console.log(`Server is Listening On http://localhost/${port}`)
})