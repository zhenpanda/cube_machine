exports.cardList = function(inputCardData) {
	//return inputCardData + " is the card name...";
	var cardList = [];
	for (var i = 0; i < inputCardData.length; i++) {
		//calculate each cards draft stock
		var cardStock = 0;
		cardStock = (
		parseFloat(inputCardData[i].manaEfficiency) + 
		parseFloat(inputCardData[i].manaDevelopment) +
		parseFloat(inputCardData[i].manaAccessibility) +
		parseFloat(inputCardData[i].disparityGap) + 
		parseFloat(inputCardData[i].disruptionLevel) +
		parseFloat(inputCardData[i].playOpportunity) +
		parseFloat(inputCardData[i].winContribution) +
		parseFloat(inputCardData[i].synergeticEffect) +
		parseFloat(inputCardData[i].dividendEffect) +
		parseFloat(inputCardData[i].gamestateControl)
		);

		//display each card in collection
		var cardstat = {
			name: inputCardData[i].cardName,
			rating: parseFloat(cardStock) * 8.75,
			//stat: inputCardData[i]
		}
		cardList.push(cardstat);
	};
	//sort card rating by point value
	cardList.sort(function (a, b) {
	  if (a.rating < b.rating) {
	    return 1;
	  }
	  if (a.rating > b.rating) {
	    return -1;
	  }
	  // a must be equal to b
	  return 0;
	});

	return cardList;
};