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

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//home route
app.get('/', function(req, res) {
  res.send("hello world");
});

//test db route
app.get('/test', function(req,res) {

	//create a name card
	var testCard = new Card({
	  name: 'Herald of Anafenza'
	  // money: 500000,
	  // password: "BlackMesa",
	  // collectedItems: ['Jade Sword', 'Magic Beans']
	});
	// within saving
	testCard.save(function(err) {
	  if (err) return (err);
	  console.log('done');
  	  res.send(testCard);
	});
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + PORT);
});