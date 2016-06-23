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

    var whiteCards = [];
    //white cards stats
    var mtgjson = require('mtgjson');
    var cardsDB = "cardsDB";
	mtgjson(function(err, data) {
		if (err) return console.log(err);
        if (data) {
            cardsDB = data;
            //console.log(cardsDB);
        	var cs = require("../cardSearch.js");

            for (var c = 0; c < whiteCardsList.length; c++) {
            	var currentSearch = cs.cardRating(cardsDB, whiteCardsList[c]);
            	console.log("found" + currentSearch[0].name);
            }

            //********* ********* ********* ********* *********
            //save and replace existing card of same name
            whiteCards.forEach(function(entry) {
                //console.log(entry);
                var currentCard = new Card(entry);
                Card
                    .find({ cardName:entry.cardName })
                    .remove()
                    .exec();
                currentCard.save(function(err) {
                    if (err) return (err);
                });
                //console.log(whiteCards[s]);
            });
            console.log('seeding white cards...');
            //********* ********* ********* ********* *********

        }
    });

    return 1;
};