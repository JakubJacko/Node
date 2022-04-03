console.log("hello world")
const express = require('express')
const app = express()


const game = {
    plane : ['','','','','','','','',''],
    possibilities : ["/kolko","/krzyzyk"],
    turn : 0,
    
    makeSign(player, index){
        if (this.possibilities[this.turn] == player){
            this.plane[index] = player;
            this.turn = this.turn == 0 ? 1 : 0;
            
        }

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
    res.send(game)


})


app.listen(80)

