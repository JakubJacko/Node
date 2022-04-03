console.log("hello world")
const express = require('express')
const app = express()


const game = {
    plane : ['','','','','','','','',''],
    makeSign(player, index){
        this.plane[index] = player;
        // console.log(this.plane)
    }


}

app.use(express.static('public'))

app.get(['/kolko', '/krzyzyk'], function(req, res) {
    // console.log(__dirname)
    res.sendFile(__dirname+'/public/template.html')
})

app.get('/data', (req, res) => {
    // console.log(req.query)
    game.makeSign(req.query.player, req.query.index)
    res.send()
})

app.get('/sendData', (req, res) => {
    res.send(game.plane)


})


app.listen(80)

