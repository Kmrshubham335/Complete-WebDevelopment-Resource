/* testing the request by html */

const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


/* Chain CallBack
app.get('/', (req, res) => {
    console.log("Get Request")
    res.send("Hello this get Request")
}).post('/', (req, res) => {
    console.log("Post Request")
    res.send("Hello this Post Request")
}).put('/',(req,res)=>{
    res.send("hello this is put request")
    console.log(" this is Put Request")
}).delete('/',(req,res)=>{
    res.send("Hello I am Delete request ")
    console.log("Delete Request")
}) */

// Rendering the file 
app.get('/index',(req,res)=>{
    console.log("Rendering the html file in the browser")
    res.sendFile('/File/index.html',{root : __dirname})
})

//More than One CallBack
app.get('/example',(req,res,next)=>{
    console.log("First CallBack")
    next() // To use more than one callBack We use next()method
},(req,res)=>{
    console.log("Second Call Back")
    res.send("More than One CallBack Example")
})

// Returning the Json file
app.get('/api',(req,res)=>{
    console.log("Rendering the Json file in the browser")
    res.json({a:1,b:2,c:3})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})