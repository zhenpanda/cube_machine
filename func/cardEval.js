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
    var disruptionLevelStat;
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
        console.log("ev ", cardInfo.name);
		if (wordInString(cardInfo.text, "Delve") || wordInString(cardInfo.text, "Affinity") || wordInString(cardInfo.text, "Suspend") ) {
                stat = stat + 1;
        }else{    	
	        switch (cardInfo.cmc) {
	            case 0:
	                stat = 7;
	                break;
	            case 1:
	                stat = 5;
	                break;
	            case 2:
	                stat = 4;
	                break;
	            case 3:
	                stat = 1.75;
	                break;
	            case 4:
	                stat = 0;
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
	                stat = -12;
	                break;
	            default:
	                stat = -15;
	                break;
	        }
        }

        //edgecase
        if (wordInString(inputCard.name, "Everflowing Chalice")) {
            stat = 2;
        };

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

        //mirari
        if (wordInString(inputCard.name, "Mirari's Wake")) {
            stat = 5;
        };
        //lotus
        if (wordInString(cardInfo.text, "Add three mana")) {
            stat = stat + 3;
        };

        if (stat > 5) {
        	stat = 5;
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
                    stat = -3.55;
                    break;
                case 2:
                    stat = -8.75;
                    break;
                case 3:
                    stat = -12.55;
                    break;
                case 4:
                    stat = -15.75;
                    break;
                case 5:
                    stat = -20.45;
                    break;
                default:
                    stat = 0;
                    break;
            };
            /*
            //check for double pip color cards
            var extraPip = (cardInfo.manaCost.length / 3) - cardInfo.colors.length;
            //console.log(cardInfo.manaCost, extraPip + " extra pip");
            stat = stat - (extraPip * 1.5);
            if (wordInString(cardInfo.manaCost, "/")) {
                stat = stat + 2;
            };*/

        } else {
            stat = 0;
        };

        //edgecase
        if (wordInString(cardInfo.text, "Devoid")) {
            stat = stat - 3.5;
        };

        return stat;
    };
    manaAccessibilityStat = evalManaAccessibility(inputCard);

    //Eval disparityGap func
    var evalDisparityGapStat = function(cardInfo) {
        var stat = 0;

        //draw spell
        if (wordInString(cardInfo.text, "Draw a card") || wordInString(cardInfo.text, "draw a card")) {
            stat = stat + 2;
        };
        //draw mulitple cards
        if (wordInString(inputCard.text, "Draw two cards") || wordInString(inputCard.text, "draw two cards")) {
            stat = stat + 4;
        };
        if (wordInString(inputCard.text, "Draw three cards") || wordInString(inputCard.text, "draw three cards")) {
            stat = stat + 6;
        };
        if (wordInString(inputCard.text, "Draw four cards") || wordInString(inputCard.text, "draw four cards")) {
            stat = stat + 8;
        };

        //check keywords
        if (wordInString(inputCard.text, "flashback")) {
            stat = stat + 2;
        };  
        if (wordInString(inputCard.text, "Search your library for a card")) {
            stat = stat + 5;
        };  

        //return cards
        if (wordInString(inputCard.text, "you may return target card from your graveyard to your hand")) {
            stat = stat + 2.5;
        };  

        //free spell
        if (wordInString(inputCard.text, "your graveyard without paying its mana cost")) {
            stat = stat + 2.5;
        };  

        //edge case
        if (inputCard.name == "Fact or Fiction") {
        	stat = stat + 6;
        };

        return stat;
    };
    disparityGapStat = evalDisparityGapStat(inputCard);
    //console.log(inputCard.name + " manaDev " + manaDevelopmentStat);

    //Eval disruptionLevel func
    var evalDisruptionLevel = function(cardInfo) {
        var stat = 0;

        //destroy
        if (wordInString(inputCard.text, "Destroy target creature") || wordInString(inputCard.text, "destroy target creature")) {
            stat = stat + 2.5;
        };  
        if (wordInString(inputCard.text, "destroy target nonartifact") || 
        	wordInString(inputCard.text, "destroy target artifact")) {
            stat = stat + 1.5;
        };  
        //sacrifice
        if (wordInString(inputCard.text, "Target player sacrifices a creature") || wordInString(inputCard.text, "target player sacrifices a creature")) {
            stat = stat + 2;
        }; 

        //damage
        if (wordInString(inputCard.text, "1 damage to target creature ")) {
            stat = stat + 0.5;
        };  
        if (wordInString(inputCard.text, "2 damage to target creature ")) {
            stat = stat + 1;
        };      
        if (wordInString(inputCard.text, "3 damage to target creature ")) {
            stat = stat + 2;
        };  
        if (wordInString(inputCard.text, "4 damage to target creature ")) {
            stat = stat + 3;
        }; 
        if (wordInString(inputCard.text, "5 damage to target creature ")) {
            stat = stat + 5;
        };   
        //ugin
        if (wordInString(inputCard.text, "deals 3 damage to target creature ")) {
            stat = stat + 2;
        };

        //creature minis
        if (wordInString(inputCard.text, "creature gets -1/-1")) {
            stat = stat + 0.5;
        };  
        if (wordInString(inputCard.text, "creature gets -2/-2")) {
            stat = stat + 1;
        };      
        if (wordInString(inputCard.text, "creature gets -3/-3")) {
            stat = stat + 2;
        };  
        if (wordInString(inputCard.text, "creature gets -4/-4")) {
            stat = stat + 3;
        };  

        //tap
        if (wordInString(inputCard.text, "tap target permanent")) {
            stat = stat + 2;
        }; 
        if (wordInString(inputCard.text, "tap target creature")) {
            stat = stat + 1;
        }; 

        //return creature
        if (wordInString(inputCard.text, "Return target creature to its owner's hand")) {
            stat = stat + 2;
        };  
        //return permanet
        if (wordInString(inputCard.text, "Return target permanent to its owner's hand")) {
            stat = stat + 2.75;
        }; 
        if (wordInString(inputCard.text, "return target spell or permanent")) {
            stat = stat + 3.5;
        }; 


        //kill walkers
        if (wordInString(inputCard.text, "Destroy target planeswalker")) {
            stat = stat + 3;
        };  

        //counterspell
        if (wordInString(inputCard.text, "Counter target noncreature spell")) {
            stat = stat + 1.5;
        };  
        if (wordInString(inputCard.text, "Counter target spell")) {
            stat = stat + 2.75;
        };  

        //steal
        if (wordInString(inputCard.text, "gain control of target creature")) {
            stat = stat + 1.5;
        };  
        if (wordInString(inputCard.text, "gain control of target creature or planeswalker")) {
            stat = stat + 3;
        };  

        //exile 
        if (wordInString(inputCard.text, "Put target creature on the bottom")) {
            stat = stat + 3;
        };  
        if (wordInString(inputCard.text, "exile target nonland permanent") || wordInString(inputCard.text, "Exile target nonland permanent")) {
            stat = stat + 3.5;
        };  
        if (wordInString(inputCard.text, "exile target artifact") || 
        	wordInString(inputCard.text, "Exile target artifact")) {
            stat = stat + 1.5;
        };  

        //discard
        if (wordInString(inputCard.text, "player discards a card")) {
            stat = stat + 1;
        };  
        if (wordInString(inputCard.text, "player discards two cards")) {
            stat = stat + 2;
        };  

        //mill
        if (wordInString(inputCard.text, "exile the top three cards of target opponent's library")) {
            stat = stat + 3;
        }; 

    	return stat;
    };
    disruptionLevelStat = evalDisruptionLevel(inputCard);

    //Eval playOpportunity func
    var evalPlayOpportunity = function(cardInfo) {
        var stat = 0;
        //console.log(cardInfo.types[0], cardInfo.subtypes);
        if (cardInfo.types[0] == "Instant") {
            stat = stat + 3;
        };
        if (cardInfo.subtypes == "Equipment") {
            stat = stat - 1;
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
        	stat = stat + (parseInt(cardInfo.power) * 0.5);
        }
		
		//conditional card check
		if (cardInfo.name != "Odric, Lunarch Marshal") {
	        //checking keywords
			if ( parseInt(cardInfo.power) > 0) {
	        	var evasionMinorKeywords = ["menace", "trample","intimidate","haste"];
	        	var combatKeywords = ["first strike","prowess","Vigilance","Deathtouch"];
			
		        if (wordInString(inputCard.text, "Flying") || 
		        	wordInString(inputCard.text, "flying")) {
		            stat = stat + 1;
		        };
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
    		if (cardInfo.text) {

		        var plusKeywords = ['+1/+1','+2/+2','+3/+3','+4/+4','+5/+5','+6/+6'];
		        for (var p = 0; p < plusKeywords.length; p++) {
		        	if (cardInfo.text.indexOf(plusKeywords[p]) > -1) {
		        		stat = stat + ((p + 1) * 0.5);
		        	}
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
        
        //grave titan
        if (wordInString(inputCard.text, "2 black Zombie")) {
            stat = stat + 2;
        };
        if (wordInString(inputCard.text, "3 damage")) {
            stat = stat + 2;
        };  
        //frost titan
        if (wordInString(inputCard.text, "tap target permanent")) {
            stat = stat + 2;
        }; 
        if (wordInString(inputCard.text, "tap target creature")) {
            stat = stat + 1;
        }; 
        //sun titan
        if (wordInString(inputCard.text, "your graveyard to the battlefield")) {
            stat = stat + 2.5;
        }; 
        //prime titan
        if (wordInString(inputCard.text, "up to two land cards")) {
            stat = stat + 2;
        }; 

        var synergyWords = ["support","Cascade"];
        for (var s = 0; s < synergyWords.length; s++) {
            if (wordInString(cardInfo.text, synergyWords[s])) {
                stat = stat + 3;
            }
        };

        //broodmate
        if (wordInString(cardInfo.text, "token with flying onto the battlefield")) {
            stat = stat + 4;
        }

        //uptap
        if (wordInString(cardInfo.text, "Untap all creatures and lands you control")) {
            stat = stat + 2;
        }

        //play free creature two
        if (wordInString(cardInfo.text, "Put up to two creature cards from your hand onto the battlefield")) {
            stat = stat + 4;
        }

        //hornet queen tokens
        if (wordInString(cardInfo.text, "green Insect creature tokens with flying and deathtouch onto the battlefield")) {
            stat = stat + 6;
        }

        //battlesphere
        if (wordInString(cardInfo.text, "put four 1/1 colorless Myr")) {
            stat = stat + 2;
        }

        //masspump
        if (wordInString(cardInfo.text, "Creatures you control get +1/+1") || wordInString(cardInfo.text, "creatures you control get +1/+1")) {
            stat = stat + 1.5;
        }
        if (wordInString(cardInfo.text, "Creatures you control get +2/+2") || wordInString(cardInfo.text, "creatures you control get +2/+2")) {
            stat = stat + 2.5;
        }
        if (inputCard.name == "Overrun") {
            stat = stat + 3.5;
        }

        //walkers
        //tezzert
        if (wordInString(inputCard.text, "an artifact card with converted")) {
            stat = stat + 1.5;
        };
        //ajani
        if (wordInString(inputCard.text, "counter on each creature you control")) {
            stat = stat + 1.75;
        };
        //elspeth
        if (wordInString(inputCard.text, "Put three 1/1 white Soldier creature")) {
            stat = stat + 1.5;
        };
        if (wordInString(inputCard.text, "Destroy all creatures with power 4")) {
            stat = stat + 1;
        };
        //peaking
        if (wordInString(inputCard.text, "Look at the top card of target player's library")) {
            stat = stat + 0.5;
        };
        if (wordInString(inputCard.text, "Untap up to two target artifacts")) {
            stat = stat + 2;
        };

        //deducitons
        if (wordInString(cardInfo.text, "Metalcraft")) {
            stat = stat - 4;
        }

        return stat;
    };
    synergeticEffectStat = evalSynergeticEffect(inputCard);

    //Eval dividendEffect func
    var evalDividendEffect = function(cardInfo) {
        var stat = 0;
        if (cardInfo.types[0] == 'Planeswalker') {

            //jace
            if (wordInString(inputCard.text, "Draw three cards")) {
                stat = stat + 6;
            };
	        if (wordInString(inputCard.text, "Return target creature to its owner's hand")) {
	            stat = stat + 1.5;
	        };  
	        if (wordInString(inputCard.text, "Look at the top card of target player's library")) {
	            stat = stat + 0.5;
	        };
	        //elspeth
            if (wordInString(inputCard.text, "Put three 1/1 white Soldier creature")) {
                stat = stat + 1.5;
            };
            if (wordInString(inputCard.text, "Destroy all creatures with power 4")) {
                stat = stat + 1;
            };
            //tezzert
            if (wordInString(inputCard.text, "an artifact card with converted")) {
                stat = stat + 1.5;
            };
            if (wordInString(inputCard.text, "Untap up to two target artifacts")) {
                stat = stat + 2;
            };
            
            //ajani
            if (wordInString(inputCard.text, "counter on each creature you control")) {
                stat = stat + 1.75;
            };
            //ugin
            if (wordInString(inputCard.text, "deals 3 damage")) {
                stat = stat + 2;
            };
            if (wordInString(inputCard.text, "Exile each permanent with converted mana")) {
                stat = stat + 1.75;
            };
            //garruk
            if (wordInString(inputCard.text, "Untap two target lands")) {
                stat = stat + 2;
            };
            if (wordInString(inputCard.text, "3 green Beast creature token onto the battlefield")) {
                stat = stat + 1.5;
            };
            //liliana
            if (wordInString(inputCard.text, "Target player sacrifices a creature") || wordInString(inputCard.text, "target player sacrifices a creature")) {
    			stat = stat + 2;
        	}; 
	        if (wordInString(inputCard.text, "player discards a card")) {
	            stat = stat + 1;
	        };  
	        //ashiok
	        if (wordInString(inputCard.text, "exile the top three cards of target opponent's library")) {
	            stat = stat + 3;
	        }; 
	        

        };


        var divWords = [": ", "Whenever", "each other player's untap step", "your upkeep"];
        for (var w = 0; w < divWords.length; w++) {

        	//check for resdual effect
            if (wordInString(cardInfo.text, divWords[w])) {


		        //olivia
		        if (wordInString(inputCard.text, "Gain control of target")) {
		            stat = stat + 2;
		        };

                //hedron
                if (wordInString(inputCard.text, "Sacrifice") == false) {
                	//spheix

		            if (wordInString(inputCard.text, "draw two")) {
		                stat = stat + 4;
		            };
                }

		        //grave titan
		        if (wordInString(inputCard.text, "2 black Zombie")) {
		            stat = stat + 2;
		        };
		        if (wordInString(inputCard.text, "3 damage")) {
		            stat = stat + 2;
		        };  
		        //frost titan
		        if (wordInString(inputCard.text, "tap target permanent")) {
		            stat = stat + 2;
		        }; 
		        if (wordInString(inputCard.text, "tap target creature")) {
		            stat = stat + 1;
		        }; 
		        //sun titan
		        if (wordInString(inputCard.text, "your graveyard to the battlefield")) {
		            stat = stat + 2.5;
		        }; 
		        //prime titan
		        if (wordInString(inputCard.text, "up to two land cards")) {
		            stat = stat + 2;
		        }; 

		        //swords
		        if (wordInString(cardInfo.text, "Untap all creatures and lands you control")) {
		            stat = stat + 2;
		        }

		        //creakwood
		        if (wordInString(cardInfo.text, "put a 1/1 black and green Worm ")) {
		            stat = stat + 1.5;
		        }

		        
            }
        };
        //edge case

    	//yamabushi
        if (cardInfo.name == "Kumano, Master Yamabushi") {
            stat = stat + 1.5;
        }; 
        //noyan
        if (wordInString(cardInfo.text, "counters on target land")) {
            stat = stat + 1.5;
        }
        //visara
        if (wordInString(inputCard.text, "Destroy target creature") || wordInString(inputCard.text, "destroy target creature")) {
            stat = stat + 2.5;
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
                    stat = stat + 3.5;
                }
            };
        };

        //mass removal
        if (wordInString(cardInfo.text, "deals X damage to each creature")) {
            stat = stat + 3;
        }
        //condition mass removal
        if (wordInString(cardInfo.text, "creatures don't untap during that player's next untap step")) {
            stat = stat + 1.5;
        }
        if (wordInString(inputCard.text, "Exile each permanent with converted mana")) {
            stat = stat + 2.75;
        };

        //void winnower
        if (wordInString(cardInfo.text, "opponents can't cast spells with even converted mana costs")) {
            stat = stat + 4;
        }
        //dromoke
        if (wordInString(cardInfo.text, "Your opponents can't cast spells during your turn")) {
            stat = stat + 2;
        }

        return stat;
    };
    gamestateControlStat = evalGamestateControl(inputCard);


    /* ----------- ----------- ----------- */

    var cardStats = {
        cardName: inputCard.name,
        manaEfficiency: manaEfficiencyStat,
        manaDevelopment: manaDevelopmentStat,
        manaAccessibility: manaAccessibilityStat,
        disparityGap: disparityGapStat,
        disruptionLevel: disruptionLevelStat,
        playOpportunity: playOpportunityStat,
        winContribution: winContributionStat,
        synergeticEffect: synergeticEffectStat,
        dividendEffect: dividendEffectStat,
        gamestateControl: gamestateControlStat
    };

    return cardStats;
};
