exports.cardRating = function(cardDatabase, inputCardName) {

	//finding a card in mtgjson
	function getObjects(obj, key, val) {
	    var objects = [];
	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        if (typeof obj[i] == 'object') {
	            objects = objects.concat(getObjects(obj[i], key, val));
	        } else if (i == key && obj[key] == val) {
	            objects.push(obj);
	        }
	    }
	    return objects;
	}
	var c = getObjects(cardDatabase, 'name', inputCardName);
	//console.log(c);
	return c;
};