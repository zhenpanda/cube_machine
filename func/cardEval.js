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
	var manaAccessibilityStat;
	var disparityGapStat;

	var playOpportunityStat;

	var gamestateControlStat;
	var dividendEffectStat;
	var gamestateControlStat;

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
		        stat = 2;
		        break;
		    case 3:
		        stat = 0.75;
		        break;
		    case 4:
		        stat = -1;
		        break;
		    case 5:
		        stat = -2.75;
		        break;
		    case 6:
		        stat = -5;
		        break;
		    case 7:
		        stat = -8;
		        break;
		    case 8:
		        stat = -10;
		        break;
    		default: 
        		stat = -12;
        		break; 
		}
		return stat;
	};
	manaEfficiencyStat = evalManaEfficiency(inputCard);

	//Eval manaDevelopment func
	var evalManaDevelopment = function(cardInfo) {
		var stat = 0;
		var manaRampWords = ["mana","land"];
		for (var w = 0; w < manaRampWords.length; w++) {
			if (wordInString(cardInfo.text, manaRampWords[w])) {
				stat = stat + 5;
			}
		};
		stat = stat - cardInfo.cmc;
		if (stat < 0) {
			stat = 0;
		}
		return stat;
	};
	manaDevelopmentStat = evalManaDevelopment(inputCard);
	//console.log(inputCard.name + " manaDev " + manaDevelopmentStat);

	//Eval manaAccessibility func
	var evalManaAccessibility = function(cardInfo) {
		var stat;
		//console.log(inputCard.name + " colorID " + inputCard.colors);
		if (cardInfo.colors) {		
			switch (cardInfo.colors.length) {
			    case 1:
			        stat = 2;
			        break;
			    case 2:
			        stat = 0;
			        break;
			    case 3:
			        stat = -3;
			        break;
			    case 4:
			        stat = -4;
			        break;
			    case 5:
			        stat = -5;
			        break;
	    		default: 
	        		stat = 0;
	        		break; 
			};
			//check for double pip color cards
			var extraPip = (cardInfo.manaCost.length/3) - cardInfo.colors.length;
			//console.log(cardInfo.manaCost, extraPip + " extra pip");
			stat = stat - (extraPip * 1.5);
			if (wordInString(cardInfo.manaCost, "/")) {
				stat = stat + 2;
			};
		}else{
			stat = 5;
		};

		return stat;
	};
	manaAccessibilityStat = evalManaAccessibility(inputCard);

	//Eval disparityGap func
	var evalDisparityGapStat = function(cardInfo) {
		var stat = 0;
		//draw spell
		if (wordInString(cardInfo.text, "Draw")) {
			stat = stat + 1;
			//draw mulitple cards
			if (wordInString(inputCard.text, "Draw two cards")) {
				stat = stat + 1;
			};
			if (wordInString(inputCard.text, "Draw three cards")) {
				stat = stat + 2;
			};
			if (wordInString(inputCard.text, "Draw four cards")) {
				stat = stat + 3;
			};
		};
		return stat;
	};
	disparityGapStat = evalDisparityGapStat(inputCard);
	//console.log(inputCard.name + " manaDev " + manaDevelopmentStat);

	//Eval playOpportunity func
	var evalPlayOpportunity = function(cardInfo) {
		var stat = 0;
		//console.log(cardInfo.types[0], cardInfo.subtypes);
		if (cardInfo.types[0] == "Instant") {
			stat = stat + 3;
		};
		if (cardInfo.subtypes == "Equipment") {
			stat = stat - 2;
		};

		return stat;
	};
	playOpportunityStat = evalPlayOpportunity(inputCard);

	//Eval dividendEffect func
	var evalDividendEffect = function(cardInfo) {
		var stat = 0;
		if (cardInfo.types[0] == 'Planeswalker') {
			stat = stat + 5;
		};
		var divWords = [":","Whenever","During your"];
		for (var w = 0; w < divWords.length; w++) {
			if (wordInString(cardInfo.text, divWords[w])) {
				stat = stat + 1;
			}
		};
		return stat;
	};
	dividendEffectStat = evalDividendEffect(inputCard);

	//Eval gamestateControl func
	var evalGamestateControl = function(cardInfo) {
		var stat = 0;
		var protections = ["from white", "from blue", "from black", "from red", "from green"];
		if (wordInString(cardInfo.text, "protection")) {
			for (var p = 0; p < protections.length; p++) {
				if (wordInString(cardInfo.text, protections[p])) {
					stat = stat + 1;
				}
			};
		};

		return stat;
	};
	gamestateControlStat = evalGamestateControl(inputCard);


	/* ----------- ----------- ----------- */
    //test obj
    var cardStats = {
        cardName: inputCard.name,
        manaEfficiency: manaEfficiencyStat,
        manaDevelopment: manaDevelopmentStat,
        manaAccessibility: manaAccessibilityStat,
        disparityGap: disparityGapStat,
        disruptionLevel: 0,
        playOpportunity: playOpportunityStat,
        winContribution: 0,
        synergeticEffect: 0,
        dividendEffect: dividendEffectStat,
        gamestateControl: gamestateControlStat
    };

    return cardStats;
};
