exports.setMeta = function(inputSet) {

    //func
    var mtgjson = require('mtgjson');
    //earch for a single card in the mtgjsoin
    var cs = require("../func/cardSearch.js");

    mtgjson(function(err, data) {
        if (err) return console.log(err);

        //out data
        var metaObj = {
        	creatureCount: 0,
        	nonCreatureCount: 0,
        	totalPower: 0,
        	totalToughness: 0,
        	averagePower: 0,
        	averageToughness: 0,
        	White : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	Blue : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	Black : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	Red : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	Green : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	Colorless : {
        		creatureCount: 0,
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	}
        };

        var colors = ['White','Blue','Black','Red','Green','Colorless'];
        //if data found
        if (data) {
            for (var c = 0; c < inputSet.length; c++) {
            	//search data on current card
            	var currentCard = cs.cardRating(data, inputSet[c]);
            	//console.log(currentCard[0]);

            	//total set
                var type = currentCard[0].types[0];
                if (type == 'Creature') {
                	metaObj.creatureCount++;

                	//all cards
					if(parseInt(currentCard[0].power) >= 0){
            			metaObj.totalPower = metaObj.totalPower + parseInt(currentCard[0].power);
					}
					if(parseInt(currentCard[0].toughness) >= 0){
            			metaObj.totalToughness = metaObj.totalToughness + parseInt(currentCard[0].toughness);
					}

                	//color meta breakdown
                	for (var r = 0; r < colors.length; r++) {
                		var currentColor = colors[r];

                		//check if card has color
                		if (currentCard[0].colors) {                			
                			//check which color the card is
	                		if (currentCard[0].colors[0] == currentColor) {
	                			//creature count by color
	                			metaObj[currentColor].creatureCount++;

								if(parseInt(currentCard[0].power) >= 0){
			            			metaObj[currentColor].totalPower = metaObj[currentColor].totalPower + parseInt(currentCard[0].power);
								}
								if(parseInt(currentCard[0].toughness) >= 0){
			            			metaObj[currentColor].totalToughness = metaObj[currentColor].totalToughness + parseInt(currentCard[0].toughness);
								}
	                		}

                		}

                	};

                	console.log(currentCard[0].name, " counted.");
                	//console.log(currentCard[0].name, " counted.", currentCard[0].power, currentCard[0].toughness);
                	
                	//console.log(metaObj);
                
                }else{
                	metaObj.nonCreatureCount++;
                }
            }
			
			//find average p/t
			metaObj.averagePower = metaObj.totalPower / metaObj.creatureCount;
			metaObj.averageToughness = metaObj.totalToughness / metaObj.creatureCount;
			//find average p/t each color
			for (var e = 0; e < colors.length; e++) {
        		var currentColor = colors[e];
				metaObj[currentColor].averagePower = metaObj[currentColor].totalPower / metaObj[currentColor].creatureCount;
				metaObj[currentColor].averageToughness = metaObj[currentColor].totalToughness / metaObj[currentColor].creatureCount;
			}

			console.log(metaObj);
			return 1;
        }
    });

};