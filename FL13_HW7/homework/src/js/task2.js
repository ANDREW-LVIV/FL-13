let minNumber = 0;
let maxNumber = 5;
const MAX_NUMBER_INCREASER = 5;
const MAX_ATTEMPTS = 3;
const START_PRIZE = 100;
const PRIZE_DECREASER = 2;
const PRIZE_INCREASER = 2;
let totalPrize = 0;

let startGame = confirm('Do you want to play a game?');

while (startGame === true) {
	let attempts = MAX_ATTEMPTS;
	let possiblePrize = START_PRIZE;
	let genNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
	console.log(genNumber);
	while(attempts>0){
		let userNumber = parseFloat(prompt(`Choose a number in range from ${minNumber} to ${maxNumber}` +
			`\nAttempts left: ${attempts}` +
			`\nTotal prize: ${totalPrize}$` + 
			`\nPossible prize on current attempt: ${possiblePrize}$`));
		if (userNumber === genNumber) {
			totalPrize += possiblePrize;
			alert(`Your prize is ${totalPrize}$`);
			break;
		} else {
			possiblePrize /= PRIZE_DECREASER;
			attempts --;
		}
	}
	if(attempts===0){
		startGame = confirm('Do you want to play again?');
		if (startGame === true) {
			possiblePrize = START_PRIZE;
			continue;
		} else if (startGame === false && totalPrize <= 0){
			alert('You did not become a billionaire, but can.');
			break;	
		} else {
			alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
			break;
		}
	}else{
		startGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
		if (startGame === true) {
			maxNumber += MAX_NUMBER_INCREASER;
			possiblePrize *= PRIZE_INCREASER;
			attempts = MAX_ATTEMPTS;
			continue;	
		} else {
			alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
			break;
		}
	}
}