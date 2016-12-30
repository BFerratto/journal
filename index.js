var express = require('express')
var bodyParser = require('body-parser')
var login = require ("./routes/login")
var db = require("./config")
var app = express()
var port = db.port

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post("/login",login)
app.listen(port, function() {
    console.log('App is listening on '+ port)
})
