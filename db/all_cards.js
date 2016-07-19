//seeding the white cards
exports.seed = function(inputSet) {
    //console.log(inputSet);

    //func
    var mtgjson = require('mtgjson');
    var cardsDB = "cardsDB";
    var ce = require("../func/cardEval.js");
    //earch for a single card in the mtgjsoin
    var cs = require("../func/cardSearch.js");
    
    //test card ary
    var testCards = [];

    mtgjson(function(err, data) {
        if (err) return console.log(err);
        if (data) {
            //console.log(cardsDB);
            cardsDB = data;

            for (var c = 0; c < inputSet.length; c++) {
                var currentSearch = cs.cardRating(cardsDB, inputSet[c]);
                //console.log("found card" + currentSearch[0].name);

                //pass in full card info from mtgjson to get evaluation
                var currentEval = ce.cardEvaluation(currentSearch[0]);
                testCards.push(currentEval);

            }
            //********* ********* ********* ********* *********
            testCards.forEach(function(entry) {
                //console.log(entry);
                var currentCard = new Card(entry);
                Card
                    .find({ cardName:entry.cardName })
                    .remove()
                    .exec();
                currentCard.save(function(err) {
                    if (err) return (err);
                });
                console.log("~~~~~~ ~~~~~~ ~~~~~~");
                console.log("seeding " + entry.cardName);
            });
            //console.log('seeded white cards...');
            //********* ********* ********* ********* *********
        }
    });

    return 1;
};