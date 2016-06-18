var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/cube");
// var db = mongoose.connection;
/*Mongoose Connect*/
var db = 'mongodb://localhost/cube';
mongoose.connect(db);

//models
Card = require('./models/card.js');

//func
var cr = require("./cardRating.js");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//home route
app.get('/', function(req, res) {
  res.send("hello world");
});

//find card name route
app.get('/find', function(req,res) {
  Card
    .find({
      cardName: 'Mox Jet'
    })
    .exec(function(err, doc) {
      if (err) return (err);
      var out = doc[0].cardName;
      res.send(out);
    });
});

//card rating route
app.get('/rate', function(req,res) {
  Card
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);
		var str = cr.cardRating(doc);
		res.json(str);
    });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + PORT);
});