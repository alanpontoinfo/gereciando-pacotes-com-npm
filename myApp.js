var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

bGround.log('Hello World');

console.log('Hello World');

app.get("/", function(req, res){
res.sendFile(_dirname + "/views/ndex.html");
})























module.exports = app;