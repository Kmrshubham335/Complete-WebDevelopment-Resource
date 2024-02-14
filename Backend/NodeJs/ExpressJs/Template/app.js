import express from 'express'
const app = express()
const port = '3000'
import web from '../Template/routes/web.js'
import {join} from 'path'

// Setup the directory where template files are located
// app.set('views', './views') 
//when we kept all files in views folder than it is not required

//Set up the template engine

app.set('view engine', 'ejs')

app.use('/css',express.static(join(process.cwd(), 'public/Css')))
// app.use('/static', express.static('public'))

app.use('/',web)



app.listen(port,()=>{
    console.log(`Server Listening on http://${port}`)
})