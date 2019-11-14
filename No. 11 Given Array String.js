function compressArray(original) {

	var compressed = [];

	var copy = original.slice(0);

	for (var i = 0; i < original.length; i++) {

		var myCount = 0;

		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
	return compressed;
};
console.log(compressArray(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]));