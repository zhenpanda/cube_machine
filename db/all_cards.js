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
    var blueCardsList = [
        "Delver of Secrets",
        "Sidisi's Faithful",
        "Aquamoeba",
        "Coralhelm Guide",
        "Deranged Assistant",
        "Jace, Vryn's Prodigy",
        "Merfolk Looter",
        "Mindshrieker",
        "Snapcaster Mage",
        "Spiketail Hatchling",
        "Thing in the Ice",
        "Eldrazi Skyspawner",
        "Man-o'-War",
        "Ruination Guide",
        "Trinket Mage",
        "Vendilion Clique",
        "Aberrant Researcher",
        "Soulsworn Spirit",
        "Talrand, Sky Summoner",
        "Venser, Shaper Savant",
        "Whirler Rogue",
        "Mulldrifter",
        //"Aethersnipe",
        "Consecrated Sphinx",
        "Drowner of Hope",
        "Frost Titan",
        "Keiga, the Tide Star",
        "Somber Hoverguard",
        "Jace Beleren",
        "Jace, the Mind Sculptor",
        "Tezzeret the Seeker",
        "Etherium Sculptor",
        "Master of Etherium",
        "Brainstorm",
        "Counterspell",
        "Disperse",
        "Impulse",
        "Mana Leak",
        "Negate",
        "Remand",
        "Remove Soul",
        "Circular Logic",
        "Steady Progress",
        "Fact or Fiction",
        "Gifts Ungiven",
        "Ray of Command",
        "Repeal",
        "Dig Through Time",
        "Clutch of Currents",
        "Ponder",
        "Preordain",
        "Serum Visions",
        "Compulsive Research",
        "Fabricate",
        "Sleep",
        "Tezzeret's Gambit",
        "Welcome to the Fold",
        "Bribery",
        "Thoughtcast",
        "Treasure Cruise",
        "Ghostly Wings",
        "Chamber of Manipulation",
        "Thopter Spy Network"
    ];

    //all cards arry
    var allCardsList = whiteCardsList.concat(blueCardsList);

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

            for (var c = 0; c < allCardsList.length; c++) {
                var currentSearch = cs.cardRating(cardsDB, allCardsList[c]);
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