let price = prompt('Enter the price', '');
price = parseFloat(price);
let tip = prompt('Enter the tip percentage', '');
tip = parseFloat(tip);

const MIN_PRICE = 0;
const MIN_TIP = 0;
const MAX_TIP = 100;
const ONE_HUNDRED = 100;

if (isNaN(price) || isNaN(tip) || price < MIN_PRICE || tip < MIN_TIP || MAX_TIP < tip){
	alert('Invalid input data');
}else{
	let tipAmount = price * (tip/ONE_HUNDRED);
	tipAmount = Math.round(tipAmount * ONE_HUNDRED) / ONE_HUNDRED;

	let total = price + tipAmount;
	total = Math.round(total * ONE_HUNDRED) / ONE_HUNDRED;

	let message = 'Check number:' + price +
	'\nTip:' + tip +
	'\nTip amount:' + tipAmount +
	'\nTotal sum to pay:' + total;

	alert(message);
}