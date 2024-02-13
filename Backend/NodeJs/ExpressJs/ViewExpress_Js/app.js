import express from 'express'
const app = express()
const port ='3000'
import rou from '../ViewExpress_Js/Route/route.js'
app.use('/',rou)


app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})