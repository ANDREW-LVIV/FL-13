function positiveSum(arr) {
	let total = 0;
	for(var i in arr) {
		if(arr[i]>0){
			total += arr[i];
		}
	}
	return total;
}

positiveSum([2, 4, 6, 8]);	// => 20 
positiveSum([0, -3, 5, 7]);	// => 12
