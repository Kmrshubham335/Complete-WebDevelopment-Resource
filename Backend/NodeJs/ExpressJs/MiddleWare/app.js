import express from 'express'
const app = express()
const port = '3000'
import web from '../MiddleWare/routes/web.js'
import logger from './middleware/logger-middleware.js'
import student from './routes/web.js'


app.set('view engine','ejs')

//Application layer Middleware
// app.use(logger) 
// it will execute in every Path
// app.use('/about',logger)



app.use('/',web)
app.use('/',student)






app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})