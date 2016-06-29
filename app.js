var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mtgjson = require('mtgjson');

// mongoose.connect("mongodb://localhost/cube");
// var db = mongoose.connection;
/*Mongoose Connect*/
var db = 'mongodb://localhost/cube';
mongoose.connect(db);

//models
Card = require('./models/card.js');

//func
var cr = require("./func/cardRating.js");
var cl = require("./func/cardList.js"); 

//meta
var meta = require("./func/setMeta.js");

//cube files
var jessCube = require('./sets/jessCube.js');

//seed files
var sd_test = require('./db/seed.js');
var sd_all = require('./db/all_cards.js');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//home route
app.get('/', function(req, res) {
  res.send("hello world");
});

//card seed
app.get('/all', function(req, res) {
	//grab all the card put into array
	var inputCube = jessCube.cube();
	//console.log(inputCube);
	//put the array in seeder
	sd_all.seed(inputCube);
	res.redirect('/rate');
});

//card rating route
app.get('/rate', function(req,res) {
  Card
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);

      	//use imported cr function
		var str = cr.cardRating(doc);
		//var str = cl.cardList(doc);
		res.json(str);
    });
});
app.get('/list', function(req,res) {
  Card
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);
      	//use imported cr function
		var str = cl.cardList(doc);
		res.json(str);
    });
});

//card setmeta
app.get('/meta', function(req, res) {
	var inputCube = jessCube.cube();

	var str = meta.setMeta(inputCube);
	//console.log("meta out");
	res.json({check: "console"});
});



var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + PORT);
});