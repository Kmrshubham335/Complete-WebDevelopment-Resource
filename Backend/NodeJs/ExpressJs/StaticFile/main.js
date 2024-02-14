import express from 'express'
const port = '3000'
const app = express()
import web from '../StaticFile/routes/web.js'
import {join} from 'path'


// app.use(express.static(join(process.cwd(),'public')))
// app.use('/static', express.static(join(process.cwd(),'public')))
app.use('/css', express.static(join(process.cwd(),'public/Css')))

app.use('/',web)

app.listen(port,()=>{
    console.log(`Server Listening on http://${port}`)
})