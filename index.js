console.log("hello world")
const express = require('express')
const app = express()


const game = {
    plane : ['','','','','','','','',''],
    possibilities : ["/kolko","/krzyzyk"],
    turn : 0,
    over : false,
    makeSign(player, index){
        if (this.possibilities[this.turn] == player 
            && this.plane[index] == ''
            && !this.over){
                this.plane[index] = player;
                this.turn = this.turn == 0 ? 1 : 0;
            if(this.checkWin()){
                this.over = true;
            }
            

        }

    },
    checkWin(){
        for(let i = 0; i < 3; i++ ){
            console.log(i)
            if(this.plane[i*3] !=''
            && this.plane[i*3] == this.plane[i*3+1]
            && this.plane[i*3] == this.plane[i*3+2]){
               return true;
            }
            if(this.plane[i] !=""
            && this.plane[i] == this.plane[i+3] 
            && this.plane[i] == this.plane[i+6]){
                return true;
            }
            if(this.plane[i] !=""
            && this.plane[i] == this.plane[i+4] 
            && this.plane[i] == this.plane[i+8]){
                return true;
            }
        }
        return false;
    },

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

