let word = prompt('Enter the word', '');
let wordLength = word.length;
let whitespacesLength = word.split(/[^ \t\r\n]/)[0].length;
let charStart, charLength;

const EVEN_TWO = 2;
const TWO = 2;

if (wordLength < 1 || whitespacesLength > 1){
	alert('Invalid value');
}else{
	if(wordLength % EVEN_TWO === 1) {
		charStart = wordLength / TWO;
		charLength = charStart + 1;
	} else {
		charStart = wordLength / TWO - 1;
		charLength = charStart + TWO;
	}

	let middleCharacter = word.substring(charStart, charLength);
	let message = 'Middle character: "' + middleCharacter + '"';

	alert(message);
}