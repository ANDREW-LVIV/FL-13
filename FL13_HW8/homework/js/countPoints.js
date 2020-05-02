function countPoints(arr) {
	var total = 0;
	for(var i in arr) {
		var point = arr[i].split(":");
		var x = point[0];
		var y = point[1];
		if (x > y) {
			total += 3;
		}
		if (x < y) {
			total += 0;
		}
		if (x === y) {
			total += 1;
		}
	}
	return total;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']); // => 17
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']); // => 12
