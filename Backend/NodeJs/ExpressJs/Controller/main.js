import express from 'express'
const app = express()
const port = '3000'

import Stu from './Routes/id.js'

app.use('/Student',Stu)



app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})