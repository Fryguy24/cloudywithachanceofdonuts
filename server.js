// bring express
const express = require('express')
const app = express()
const port = 3000

// routes
app.get('/', function (req, res) {
    res.send('Hello World!')
  })

// donut route

// CREATE
// ADD a new donut
app.post('/donuts', (req, res) => {
    // get an object via req. body
    res.send('placeholder')
})
// GET donuts
app.get('/donuts', (req, res) => {
    res.send('sorry, no donuts')
})
// GET a single donut
app.get('/donuts/:id', (req, res) => {
    res.send('a single donut')
})
// DELETE donuts
app.delete('/donuts/:id', (req, res) => {
    res.send('deleted a donut')
})
// UPDATE donuts
app.patch('/donuts/:id', (req, res) => {
    res.send('updated a donut')
})
// listen on port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))