//seeding the white cards
exports.seed = function() {
    //all white cards array
    var whiteCardsList = [
        "Herald of Anafenza",
        "Kytheon, Hero of Akros",
        "Mother of Runes",
        "Soldier of the Pantheon",
        "Soul Warden",
        "Steppe Lynx",
        "Thraben Inspector",
        "Topplegeist",
        "Town Gossipmonger",
        "Accorder Paladin",
        "Ajani's Pridemate",
        "Anafenza, Kin-Tree Spirit",
        "Azorius Arrester",
        "Consul's Lieutenant",
        "Daring Skyjek",
        "Hanweir Militia Captain",
        "Hidden Dragonslayer",
        "Knight of the White Orchid",
        "Myrsmith",
        "Precinct Captain",
        "Puresteel Paladin",
        "Seeker of the Way",
        "Serene Steward",
        "Stoneforge Mystic",
        "Sunspear Shikari",
        "Suture Priest",
        "Topan Freeblade",
        "Blade Splicer",
        "Bygone Bishop",
        "Hallowed Spiritkeeper",
        "Mentor of the Meek",
        "Mirran Crusader",
        "Mirror Entity",
        "Sandsteppe Outcast",
        "Silverblade Paladin",
        "Vryn Wingmare",
        "High Sentinels of Arashin",
        'Kongming, "Sleeping Dragon"',
        "Nearheath Chaplain",
        "Odric, Lunarch Marshal",
        "Relief Captain",
        "Restoration Angel",
        "Exalted Angel",
        "Sun Titan",
        "Yosei, the Morning Star",
        "Ajani Goldmane",
        "Elspeth, Knight-Errant",
        "Gideon, Ally of Zendikar",
        "Elspeth, Sun's Champion",
        "Court Homunculus",
        "Porcelain Legionnaire",
        "Path to Exile",
        "Swords to Plowshares",
        "Gideon's Reproach",
        "Raise the Alarm",
        "Valorous Stance",
        "Fortify",
        "Shining Shoal",
        "Balance",
        "Lingering Souls",
        "Glorious Anthem",
        "Oblivion Ring",
        "Nyx-Fleece Ram"
    ];

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

            for (var c = 0; c < whiteCardsList.length; c++) {
                var currentSearch = cs.cardRating(cardsDB, whiteCardsList[c]);
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
                //console.log("~~~~~~ ~~~~~~ ~~~~~~");
                //console.log("seeding " + entry.cardName);
            });
            console.log('seeded white cards...');
            //********* ********* ********* ********* *********
        }
    });

    return 1;
};