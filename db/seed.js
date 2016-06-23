exports.seed = function() {;
    //func
    var mtgjson = require('mtgjson');
    var cardsDB = "cardsDB";
    var ce = require("../cardEval.js");
    //earch for a single card in the mtgjsoin
    var cs = require("../cardSearch.js");
    //test card ary
    var testList = ["Jace, the Mind Sculptor","Birds of Paradise"];
    var testCards = [];

    mtgjson(function(err, data) {
        if (err) return console.log(err);
        if (data) {
            //console.log(cardsDB);
            cardsDB = data;

            for (var c = 0; c < testList.length; c++) {
                var currentSearch = cs.cardRating(cardsDB, testList[c]);
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
                console.log("seeding " + entry.cardName);
            });
            //console.log('seeding testcards cards...');
            //********* ********* ********* ********* *********
        }
    });

    return 1;
};
