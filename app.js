var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//home route
app.get('/', function(req, res) {
  res.send("hello world");
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + PORT);
});