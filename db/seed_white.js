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
            	console.log(currentSearch[0].name);
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
/*
    //001
    var HeraldofAnafenza = {
        cardName: 'Herald of Anafenza',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 2.5,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 1.2,
        synergeticEffect: 3,
        dividendEffect: 1.5,
        gamestateControl: 0
    };
    whiteCards.push(HeraldofAnafenza);
    //002
    var KytheonHeroofAkros = {
        cardName: 'Kytheon, Hero of Akros',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 2.5,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 0.8,
        synergeticEffect: 1,
        dividendEffect: 3.5,
        gamestateControl: 1
    };
    whiteCards.push(KytheonHeroofAkros);
    //003
    var MotherofRunes = {
        cardName: 'Mother of Runes',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 0.4,
        synergeticEffect: 4,
        dividendEffect: 4,
        gamestateControl: 2
    };
    whiteCards.push(MotherofRunes);
    //004
    var SoldierofthePantheon = {
        cardName: 'Soldier of the Pantheon',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 0.8,
        synergeticEffect: 0.5,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(SoldierofthePantheon);
    //005
    var SoulWarden = {
        cardName: 'Soul Warden',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 0.4,
        synergeticEffect: 1,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(SoulWarden);
    //006
    var SteppeLynx = {
        cardName: 'Steppe Lynx',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 1.2,
        synergeticEffect: 1,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(SteppeLynx);
    //007
    var ThrabenInspector = {
        cardName: 'Thraben Inspector',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 2,
        disruptionLevel: 0,
        playOpportunity: 2,
        winContribution: 0.4,
        synergeticEffect: 1.25,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(ThrabenInspector);
    //008
    var Topplegeist = {
        cardName: 'Topplegeist',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 0.4,
        synergeticEffect: 1,
        dividendEffect: 1,
        gamestateControl: 3
    };
    whiteCards.push(Topplegeist);
    //009
    var TownGossipmonger = {
        cardName: 'Town Gossipmonger',
        manaEfficiency: 4,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 0.8,
        synergeticEffect: 3,
        dividendEffect: 1,
        gamestateControl: 0
    };
    whiteCards.push(TownGossipmonger);
    //010
    var AccorderPaladin = {
        cardName: 'Accorder Paladin',
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 1.2,
        synergeticEffect: 1,
        dividendEffect: 1,
        gamestateControl: 0
    };
    whiteCards.push(AccorderPaladin);
    //011
    var AjanisPridemate = {
        cardName: "Ajani's Pridemate",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 0.8,
        synergeticEffect: 1,
        dividendEffect: 1,
        gamestateControl: 0
    };
    whiteCards.push(AjanisPridemate);
    //012
    var AnafenzaKinTreeSpirit = {
        cardName: "Anafenza, Kin-Tree Spirit",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 0,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 0.8,
        synergeticEffect: 1,
        dividendEffect: 1,
        gamestateControl: 0
    };
    whiteCards.push(AnafenzaKinTreeSpirit);
    //013
    var AzoriusArrester = {
        cardName: "Azorius Arrester",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 0.8,
        synergeticEffect: 0,
        dividendEffect: 0,
        gamestateControl: 2.125
    };
    whiteCards.push(AzoriusArrester);
    //014
    var ConsulsLieutenant = {
        cardName: "Consul's Lieutenant",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 0,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 1.325,
        synergeticEffect: 1,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(ConsulsLieutenant);
    //015
    var DaringSkyjek = {
        cardName: "Daring Skyjek",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: 1,
        winContribution: 1.95,
        synergeticEffect: 0,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(DaringSkyjek);
    //016
    var HanweirMilitiaCaptain = {
        cardName: "Hanweir Militia Captain",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: -5,
        winContribution: 0.8,
        synergeticEffect: 5,
        dividendEffect: 4,
        gamestateControl: 0
    };
    whiteCards.push(HanweirMilitiaCaptain);
    //017
    var HiddenDragonslayer = {
        cardName: "Hidden Dragonslayer",
        manaEfficiency: -1,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 2,
        disruptionLevel: 4,
        playOpportunity: 2,
        winContribution: 1.2,
        synergeticEffect: 1,
        dividendEffect: 0,
        gamestateControl: 1
    };
    whiteCards.push(HiddenDragonslayer);
    //018
    var KnightoftheWhiteOrchid = {
        cardName: "Knight of the White Orchid",
        manaEfficiency: 3,
        manaDevelopment: 1,
        manaAccessibility: 0,
        disparityGap: 1,
        disruptionLevel: 4,
        playOpportunity: 2,
        winContribution: 0.95,
        synergeticEffect: 0,
        dividendEffect: 0,
        gamestateControl: 0
    };
    whiteCards.push(KnightoftheWhiteOrchid);
    //019
    var Myrsmith = {
        cardName: "Myrsmith",
        manaEfficiency: 3,
        manaDevelopment: 0,
        manaAccessibility: 2,
        disparityGap: 1,
        disruptionLevel: 0,
        playOpportunity: -1,
        winContribution: 0.8,
        synergeticEffect: 1,
        dividendEffect: 3,
        gamestateControl: 0
    };
    whiteCards.push(Myrsmith);*/

    return 1;
};
