import express from 'express'
const app = express()
const port = '3000'

app.get('/parameter/detail/1', (req, res) => {
    res.send('Parameter details 1 is delete')
})

app.get('/parameter/detail/2', (req, res) => {
    res.send('Parameter details 2 is delete')
})
//                                                  Alternative Way

app.get('/parameter/detail/:id', (req, res) => {
    res.send('every parameter id value will be deleted whether it is 1 or 100 all it will store in id')
    //For example
    console.log(req.params)
    //{ id: '700' } id is dynamic 
})
app.get('/product/:category/:id', (req, res) => {
    res.send(`category and id are dynamic and any value in url  will be accepted. And there value are shown in the page:\n ${req.params.category},${req.params.id}`)
    console.log(req.params)
    //{ category: 'mobile', id: '80' }
})

//RegX Route Expression
app.get('/detail/delete/:id([0-9]{2})', (req, res) => {
    res.send('Parameter details  is delete')
    const id = req.params
    console.log("Id has been deleted")
})
app.get('/:type(post|article)/:id([0-9]){2}', (req, res) => {
    res.send("Post or Get")
    const { type, id } = req.params
    console.log(`Method ${req.params.id}`)
})

//app.params: It will execute only One time
app.param('id',(req,res,next,id)=>{
    console.log(`ID: ${id}`)
    //ID: 2
    next()
})
app.get('/User/:id([0-9]){2}',(req,res)=>{
    res.send(`Respond Ok`)
    console.log(`Id ${req.params.id}`)
})






app.get('/flight/:from-/:to-/:On', (req, res) => {
    const { from, to } = req.params
    res.send(`Flight from ${req.params.from} to ${req.params.On} At ${req.params.On}`)
})





app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})