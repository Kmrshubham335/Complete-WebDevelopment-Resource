import express from 'express'
import cookieParser from 'cookie-parser'
import web from './routes/web.js'
const app = express()
const port = '3000'

app.use('/',web)
app.use(cookieParser())

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
