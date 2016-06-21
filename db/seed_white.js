// var mongoose = require('mongoose');
// var db = 'mongodb://localhost/cube';
// mongoose.connect(db);

// Card = require('./models/card.js');
exports.seed = function() {
	//create a name card
	var testCard = new Card({
	    cardName: 'JundCharm',
	    manaEfficiency: 1,
	    manaDevelopment: 0,
	    manaAccessibility: -3,
	    disparityGap: 2,
	    disruptionLevel: 4,
	    playOpportunity: 3,
	    winContribution: 1,
	    synergeticEffect: 0,
	    dividendEffect: 0,
	    gamestateControl: 0
	});
	testCard.save(function(err) {
	  if (err) return (err);
	  console.log('done');
	});

	var testCard2 = new Card({
	    cardName: 'SwordFIce',
	    manaEfficiency: 1,
	    manaDevelopment: 0,
	    manaAccessibility: 5,
	    disparityGap: 3,
	    disruptionLevel: 4,
	    playOpportunity: 1,
	    winContribution: 2,
	    synergeticEffect: 1,
	    dividendEffect: 3,
	    gamestateControl: 2
	});
	testCard2.save(function(err) {
	  if (err) return (err);
	  console.log('done');
	});

	var testCard3 = new Card({
	    cardName: 'Jace',
	    manaEfficiency: -1,
	    manaDevelopment: 0,
	    manaAccessibility: 0,
	    disparityGap: 5,
	    disruptionLevel: 3,
	    playOpportunity: 2,
	    winContribution: 2,
	    synergeticEffect: 0,
	    dividendEffect: 5,
	    gamestateControl: 1
	});
	testCard3.save(function(err) {
	  if (err) return (err);
	  console.log('done');
	});

	return 1;
};