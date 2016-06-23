exports.cardEvaluation = function(inputCard) {

    //console.log("This is the found card in mtgjson");
    //console.log(inputCard);
	
	//mtgjson card info
	/*
    {
        artist: 'Jason Chan',
        cmc: 4,
        colorIdentity: ['U'],
        colors: ['Blue'],
        id: 'dfce9f7321bea625321a576376e480f854f7c9cb',
        imageName: 'jace, the mind sculptor',
        layout: 'normal',
        loyalty: 3,
        manaCost: '{2}{U}{U}',
        multiverseid: 195297,
        name: 'Jace, the Mind Sculptor',
        number: '31',
        rarity: 'Mythic Rare',
        subtypes: ['Jace'],
        text: '+2: Look at the top card of target player\'s library. You may put that card on the bottom of that player\'s library.\n0: Draw three cards, then put two cards from your hand on top of your library in any order.\n−1: Return target creature to its owner\'s hand.\n−12: Exile all cards from target player\'s library, then that player shuffles his or her hand into his or her library.',
        type: 'Planeswalker — Jace',
        types: ['Planeswalker']
    };
	*/

	//card stat categories variables
	var manaEfficiencyStat;
	var manaDevelopmentStat;

	//find text func
	function wordInString(s, word){
	  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
	}

	//Eval manaEfficiency func
	var evalManaEfficiency = function(cardInfo) {
		var stat;
		switch (cardInfo.cmc) {
		    case 0:
		        stat = 5;
		        break;
		    case 1:
		        stat = 4;
		        break;
		    case 2:
		        stat = 3;
		        break;
		    case 3:
		        stat = 1;
		        break;
		    case 4:
		        stat = -1;
		        break;
		    case 5:
		        stat = -3;
		        break;
		    case 6:
		        stat = -5;
		        break;
		    case 7:
		        stat = -7;
		        break;
		    case 8:
		        stat = -9;
		        break;
    		default: 
        		stat = -10;
        		break; 
		}
		return stat;
	};
	manaEfficiencyStat = evalManaEfficiency(inputCard);

	//Eval manaDevelopment func
	var evalManaDevelopment = function(cardInfo) {
		var stat;
		var manaRampWords = ["mana","land"];
		for (var w = 0; w < manaRampWords.length; w++) {
			var md = wordInString(inputCard.text, manaRampWords[w]);
			//console.log(md);
			if (md) {
				stat = 5;
			}else{
				stat = 0;
			}
		};
		stat = stat - cardInfo.cmc;
		if (stat < 0) {
			stat = 0;
		};

		return stat;
	};
	manaDevelopmentStat = evalManaDevelopment(inputCard);
	console.log(inputCard.name + " manaDev " + manaDevelopmentStat);

    //test obj
    var cardStats = {
        cardName: inputCard.name,
        manaEfficiency: manaEfficiencyStat,
        manaDevelopment: manaDevelopmentStat,
        manaAccessibility: 0,
        disparityGap: 4,
        disruptionLevel: 2,
        playOpportunity: 0,
        winContribution: 1,
        synergeticEffect: 0,
        dividendEffect: 5,
        gamestateControl: 0
    };



    return cardStats;
};
