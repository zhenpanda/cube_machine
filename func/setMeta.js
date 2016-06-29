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
        	white : {
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	},
        	blue : {
        		totalPower: 0,
        		totalToughness: 0,
        		averagePower: 0,
        		averageToughness: 0
        	}
        };

        if (data) {
            for (var c = 0; c < inputSet.length; c++) {
            	//search data on current card
            	var currentCard = cs.cardRating(data, inputSet[c]);
            	//console.log(currentCard[0]);

                var type = currentCard[0].types[0];
                if (type == 'Creature') {
                	metaObj.creatureCount++;

					if(parseInt(currentCard[0].power) >= 0){
            			metaObj.totalPower = metaObj.totalPower + parseInt(currentCard[0].power);
					}
					if(parseInt(currentCard[0].toughness) >= 0){
            			metaObj.totalToughness = metaObj.totalToughness + parseInt(currentCard[0].toughness);
					}

                	console.log(currentCard[0].name, " counted.");
                	//console.log(currentCard[0].name, " counted.", currentCard[0].power, currentCard[0].toughness);
                	
                	console.log(metaObj);
                
                }else{
                	metaObj.nonCreatureCount++;
                }
            }
			
			//find average p/t
			metaObj.averagePower = metaObj.totalPower / metaObj.creatureCount;
			metaObj.averageToughness = metaObj.totalToughness / metaObj.creatureCount;

			console.log(metaObj);
			return 1;
        }
    });

};