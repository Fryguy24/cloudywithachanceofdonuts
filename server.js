// bring express
const express = require('express')
const app = express()
const port = 3000

// routes
app.get('/', function (req, res) {
    res.send('Hello World!')
  })

// listen on port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))