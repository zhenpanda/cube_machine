var mongoose = require('mongoose');
/*Mongoose Connect*/
var db = 'mongodb://localhost/cube';
mongoose.connect(db);

Card = require('./models/card.js');

//create a name card
var testCard = new Card({
    cardName: 'Mox Jet',
    manaEfficiency: 5,
    manaDevelopment: 5,
    manaAccessibility: 2,
    disparityGap: 1,
    disruptionLevel: 0,
    dependencyLevel: 5,
    winContribution: 5,
    synergeticEffect: 1,
    dividendEffect: 0,
    gamestateInevitability: 0
});
// within saving
testCard.save(function(err) {
  if (err) return (err);
  console.log('done');
});

//create a name card
var testCard2 = new Card({
    cardName: 'Camel',
    manaEfficiency: 0,
    manaDevelopment: 0,
    manaAccessibility: 0,
    disparityGap: 0,
    disruptionLevel: 0,
    dependencyLevel: 0,
    winContribution: 0,
    synergeticEffect: 0,
    dividendEffect: 0,
    gamestateInevitability: 0
});
// within saving
testCard2.save(function(err) {
  if (err) return (err);
  console.log('done');
});