// Creating the Express Server

const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
app.get('/contact', (req, res) => {
    res.send('Hello To contact Page!')
  })
app.get('/Blog', (req, res) => {
    res.send('Hello To Blog Page!')
  })
app.get('/Java/Hello', (req, res) => {
    res.send('Hello To Java Page!')
  }) 
*/

/* Another Method to add the Page */

// Passing the route parameter name as Slug
app.get('/Blog/:slug', (req, res) => {
  console.log(req.params)
  // { slug: 'Shubham' } it will return parameter for the above url
  res.send(`Hello to All Page ${req.params.slug}`)
})

app.get('/Home/:slug', (req, res) => {
  console.log(req.query)
  //{ mode: 'dark', region: 'in' } for the above url the following query will work
  res.send(`Hello to All Page ${req.params.slug}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})