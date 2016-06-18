exports.cardRating = function(inputCardData) {
	//return inputCardData + " is the card name...";
	var cardList = [];
	for (var i = 0; i < inputCardData.length; i++) {
		var cardstat = {
			name: inputCardData[i].cardName,
			rating: 13
		}
		cardList.push(cardstat);
	};
	//sort card rating by point value
	cardList.sort(function (a, b) {
	  if (a.value > b.value) {
	    return 1;
	  }
	  if (a.value < b.value) {
	    return -1;
	  }
	  // a must be equal to b
	  return 0;
	});

	return cardList;
};