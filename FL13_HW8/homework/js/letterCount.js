function letterCount(str, key) {
	str = str.toLowerCase();
	key = key.toLowerCase();
	return str.split(key).length - 1;
}

letterCount("Maggy", "g");	// => 2
letterCount("Barry", "b");	// => 1
letterCount("", "z");		// => 0
