function getDifference(a,b) {
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	var result;
	if (a>b){
		result = a - b;
	}else{
		result = b - a;
	}
	return result;
}

getDifference(5, 3); // => 2
getDifference(5, 8); // => 3
