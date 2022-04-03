console.log("hello world")
const express = require('express')
const app = express()

app.use(express.static('public'))


app.get(['/kolko', '/krzyzyk'], function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname+'/public/template.html')
})

app.get('/data', (req, res) => {
    console.log(req.query)
    res.send('')
})

app.listen(80)

