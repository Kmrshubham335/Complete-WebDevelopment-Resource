// route Of different module and how it can be use it.
import express from 'express'
import stu from './Student.js'
import teacher from './teacher.js'
const app = express()
const port = '3000'

// Load router Modules
app.use('/Student',stu) // 'Student' will be append on all the url for the student Modules

app.use('/Teacher',teacher)



app.listen(port ,()=>{
    console.log(`Server Listening at http://localhost:${port}`)
})