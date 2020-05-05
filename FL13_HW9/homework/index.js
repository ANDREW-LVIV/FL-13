// Task 1
function convert() {
	let arr = [];
	for(let i of arguments) {
		if(typeof i === 'number') {
			arr.push(String(i));
		}
		if(typeof i === 'string') {
			arr.push(Number(i));
		}
	}
	return arr;
}
// convert('1', 2, 3, '4'); // [1, '2', '3', 4]

// Task 2
function executeforEach(arr, func) {
	for(let i of arr) {
		func(i);
	}
}
// executeforEach([1,2,3], function(el) {console.log(el * 2)}); // 2 4 6

// Task 3
function mapArray(arr, func) {
	let newArr = [];
	executeforEach(arr, function(el) {
		newArr.push(func(Number(el)));
	});
	return newArr;
}
// mapArray([2, '5', 8], function(el) {return el + 3}); // returns [5, 8, 11]

// Task 4
function filterArray(arr, func) {
	let newArr = [];
	executeforEach(arr, function(el) {
		if(func(Number(el))){
			newArr.push(Number(el));
		}
	});
	return newArr;
}
// filterArray([2, 5, 8], function(el) { return el % 2 === 0 }); // returns [2, 8]

// Task 5
function containsValue(arr, check) {
	let result = false;
	for(let i of arr) {
		if(i === check){
			result = true;
		}
	}
	return result;
}
// containsValue([2, 5, 8], 2); // returns true
// containsValue([12, 4, 6], 5); // returns false

// Task 6
function flipOver(str) {
	let newStr = '';
	for( let i=str.length-1; 0<=i; i-- ) {
		newStr += str[i];
	}
	return newStr;
}
// flipOver('hey world'); // 'dlrow yeh'

// Task 7
function makeListFromRange(arr) {
	let newArr = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		newArr.push(i);
	}
	return newArr;
}
// makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]

// Task 8
function getArrayOfKeys(arr, key) {
	let arrVal = [];
	executeforEach(arr, function(arr){
		arrVal.push(arr[key])
	});
	return arrVal;
}
const fruits = [
	{ name: 'apple', weight: 0.5 },
	{ name: 'pineapple', weight: 2 }
];
 
// getArrayOfKeys(fruits, 'name'); // returns [‘apple’, ‘pineapple’]

// Task 9
function substitute(arr) {
	const NUMBER_LOW = 10;
	const NUMBER_HIGH = 20;
	return mapArray(arr, function(el){
		if (el > NUMBER_LOW && el < NUMBER_HIGH ) {
			return '*';
		} else {
			return el;
		}
	});
}
// substitute([58, 14, 48, 12, 31, 19, 10]); // returns [58, '*', 48, '*', 31, '*', 10]

// Task 10
function getPastDay(date, days) {
	const MILLISECOND_IN_DAY = 86400000;
	let newDateMs = new Date(date.getTime()-MILLISECOND_IN_DAY*days);
	let newDate = new Date(newDateMs).getDate();
	return newDate; 
}
// const date = new Date(2020, 0, 2);
// getPastDay(date, 1); // 1
// getPastDay(date, 2); // 31
// getPastDay(date, 365); // 2

// Task 11
function formatDate(date) {
	const TEN = 10;
	function addZero(n){
		return n<TEN ? '0'+n : n;
	}
	let newDateMs = new Date(date.getTime());
	let newYear = new Date(newDateMs).getFullYear();
	let newMonth = addZero(new Date(newDateMs).getMonth()+1);
	let newDate = addZero(new Date(newDateMs).getDate());
	let newHours = addZero(new Date(newDateMs).getHours());
	let newMinutes = addZero(new Date(newDateMs).getMinutes());

	return `${newYear}/${newMonth}/${newDate} ${newHours}:${newMinutes}`;
}
// formatDate(new Date('6/15/2019 09:15:00')); // "2019/06/15 09:15"
// formatDate(new Date()); // "2020/04/07 12:56" // gets current local time
