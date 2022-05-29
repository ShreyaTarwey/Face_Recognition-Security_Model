const path = require('path')
const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = process.env.PORT || 8080

const basePath = path.join(__dirname, '../public')

app.use(express.static(basePath))

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

//start express server
app.listen(port, () => {
    console.log('Server started on post ' + port)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index_1.html'))
})

app.get('/index_1', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'))
})

app.get('/index_1', (req, res) => {
    res.sendFile(path.join(basePath, 'index_2.html'))
})
