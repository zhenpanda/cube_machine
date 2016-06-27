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
	{ artist: 'Jeremy Jarvis',
	  cmc: 2,
	  colorIdentity: [ 'B', 'R' ],
	  colors: [ 'Black', 'Red' ],
	  id: '392ebff2cc938e20a76616b67bfee93cd884d78f',
	  imageName: 'rakdos guildmage',
	  layout: 'normal',
	  manaCost: '{B/R}{B/R}',
	  name: 'Rakdos Guildmage',
	  number: '3',
	  power: '2',
	  rarity: 'Special',
	  releaseDate: '2006-06-24',
	  subtypes: [ 'Zombie', 'Shaman' ],
	  text: '({B/R} can be paid with either {B} or {R}.)\n{3}{B}, Discard a card: Target creature gets -2/-2 until end of turn.\n{3}{R}: Put a 2/1 red Goblin creature token with haste onto the battlefield. Exile it at the beginning of the next end step.',
	  toughness: '2',
	  type: 'Creature — Zombie Shaman',
	  types: [ 'Creature' ] 
	};
	{ artist: 'Ron Spears',
	  cmc: 8,
	  colorIdentity: [ 'W' ],
	  colors: [ 'White' ],
	  flavor: '"No rest. No mercy. No matter what."',
	  id: '125eb3eb1509b65bae862b896309b3cf56597abf',
	  imageName: 'akroma, angel of wrath',
	  layout: 'normal',
	  manaCost: '{5}{W}{W}{W}',
	  mciNumber: '1',
	  multiverseid: 42049,
	  name: 'Akroma, Angel of Wrath',
	  number: '1',
	  power: '6',
	  rarity: 'Rare',
	  subtypes: [ 'Angel' ],
	  supertypes: [ 'Legendary' ],
	  text: 'Flying, first strike, vigilance, trample, haste, protection from black and from red',
	  toughness: '6',
	  type: 'Legendary Creature — Angel',
	  types: [ 'Creature' ] 
	 };
	*/

    //card stat categories variables
    var manaEfficiencyStat;
    var manaDevelopmentStat;
    var manaAccessibilityStat;
    var disparityGapStat;
    var playOpportunityStat;
    var winContributionStat;
    var synergeticEffectStat;
    var dividendEffectStat;
    var gamestateControlStat;

    //find text func
    function wordInString(s, word) {
        return new RegExp('\\b' + word + '\\b', 'i').test(s);
    }
    //spilt find
	/*
	if (string.indexOf(',') > -1) { string.split(',') }
	*/

    //Eval manaEfficiency func
    var evalManaEfficiency = function(cardInfo) {
        var stat = 0;
        console.log("evalEff ", cardInfo.name);
		if (wordInString(cardInfo.text, "Delve") || wordInString(cardInfo.text, "Affinity")) {
                stat = stat + 1;
        }else{    	
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
        }

        if (stat) {
        	return stat;
        }else{
        	return;
        }
    };
    manaEfficiencyStat = evalManaEfficiency(inputCard);

    //Eval manaDevelopment func
    var evalManaDevelopment = function(cardInfo) {
        var stat = 0;
        var manaRampWords = ["mana", "land"];
        for (var w = 0; w < manaRampWords.length; w++) {
            if (wordInString(cardInfo.text, manaRampWords[w])) {
                stat = stat + 5;
            }
        };
        stat = stat - (cardInfo.cmc * 2);
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
                    stat = 0;
                    break;
                case 2:
                    stat = -3;
                    break;
                case 3:
                    stat = -6;
                    break;
                case 4:
                    stat = -9;
                    break;
                case 5:
                    stat = -12;
                    break;
                default:
                    stat = 0;
                    break;
            };
            //check for double pip color cards
            var extraPip = (cardInfo.manaCost.length / 3) - cardInfo.colors.length;
            //console.log(cardInfo.manaCost, extraPip + " extra pip");
            stat = stat - (extraPip * 1.5);
            if (wordInString(cardInfo.manaCost, "/")) {
                stat = stat + 2;
            };
        } else {
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
        //check keywords
        if (wordInString(inputCard.text, "flashback")) {
            stat = stat + 2;
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
            stat = stat - 0;
        };

        return stat;
    };
    playOpportunityStat = evalPlayOpportunity(inputCard);

    //Eval winContribution func
    var evalWinContribution = function(cardInfo) {
        var stat = 0;
        if (cardInfo.types[0] == 'Planeswalker') {
            if (wordInString(cardInfo.text, "emblem")) {
                stat = stat + 2;
            }
        }

        if (cardInfo.power) {
        	stat = stat + (parseInt(cardInfo.power) * 0.4);
        }
		
		//conditional card check
		if (cardInfo.name != "Odric, Lunarch Marshal") {
	        //checking keywords
			if ( parseInt(cardInfo.power) > 0) {
	        	var evasionKeywords = ["flying"];
	        	var evasionMinorKeywords = ["menace", "trample","intimidate","haste"];
	        	var combatKeywords = ["first strike","prowess","Vigilance"];
			
		        for (var e = 0; e < evasionKeywords.length; e++) {
		            if (wordInString(cardInfo.text, evasionKeywords[e])) {
		                stat = stat + 1;
		            }
		        }
		        for (var m = 0; m < evasionMinorKeywords.length; m++) {
		            if (wordInString(cardInfo.text, evasionMinorKeywords[m])) {
		                stat = stat + 0.75;
		            }
		        }
		        for (var c = 0; c < combatKeywords.length; c++) {
		            if (wordInString(cardInfo.text, combatKeywords[c])) {
		                stat = stat + 0.55;
		            }
		        }
			};

	        var resilienceKeywords = ["indestructible","hexproof","shroud","regenerate"];
	        if (wordInString(cardInfo.text, "Double strike")) {
	        	stat = stat * 2;
	        }
	        for (var r = 0; r < resilienceKeywords.length; r++) {
	            if (wordInString(cardInfo.text, resilienceKeywords[r])) {
	                stat = stat + 1;
	            }
	        }
	        
		}
        if (wordInString(cardInfo.text, "Landfall")) {
    	//no landfall double count
    	}else{
	        var plusKeywords = ['+1/+1','+2/+2','+3/+3','+4/+4','+5/+5','+6/+6'];
	        for (var p = 0; p < plusKeywords.length; p++) {
	        	if (cardInfo.text.indexOf(plusKeywords[p]) > -1) {
	        		stat = stat + ((p + 1) * 0.4);
	        	}
	        }
    		
    	}

		if (stat) {
		    //console.log(stat, cardInfo.name);
			return stat;
		}else{
			//console.log(stat, cardInfo.name);
			return 0;
		}

    };
    winContributionStat = evalWinContribution(inputCard);


    //Eval synergeticEffect func
    var evalSynergeticEffect = function(cardInfo) {
        var stat = 0;
        var triggerWords = ["you may return target","graveyard to the battlefield","creature token onto the battlefield"];
        var synergyWords = ["support 3"];

        for (var w = 0; w < triggerWords.length; w++) {
            if (wordInString(cardInfo.text, triggerWords[w])) {
                stat = stat + 2;
            }
        };

        for (var s = 0; s < synergyWords.length; s++) {
            if (wordInString(cardInfo.text, synergyWords[s])) {
                stat = stat + 3;
            }
        };

        return stat;
    };
    synergeticEffectStat = evalSynergeticEffect(inputCard);

    //Eval dividendEffect func
    var evalDividendEffect = function(cardInfo) {
        var stat = 0;
        if (cardInfo.types[0] == 'Planeswalker') {
            stat = stat + 6;
        };
        var divWords = [":", "Whenever"];
        for (var w = 0; w < divWords.length; w++) {
            if (wordInString(cardInfo.text, divWords[w])) {
                stat = stat + 2;
                if (divWords[w] == 1) {
		            if (wordInString(inputCard.text, "draw two cards")) {
		                stat = stat + 2;
		            };
                }
            }
        };
        return stat;
    };
    dividendEffectStat = evalDividendEffect(inputCard);

    //Eval gamestateControl func
    var evalGamestateControl = function(cardInfo) {
        var stat = 0;
        var protections = ["from white", "from blue", "from black", "from red", "from green", "protection from the color"];
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
        winContribution: winContributionStat,
        synergeticEffect: synergeticEffectStat,
        dividendEffect: dividendEffectStat,
        gamestateControl: gamestateControlStat
    };

    return cardStats;
};
