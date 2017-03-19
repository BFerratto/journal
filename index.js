var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 8085

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('src'));
app.use(bodyParser.json())
app.post("/save", function (req,res){
  res.send("ok")
  console.log("Recebi o texto", req.body.text);
})
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(port, function() {
    console.log('App is listening on http://localhost:'+ port)
})
