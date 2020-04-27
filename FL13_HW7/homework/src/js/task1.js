const LOGIN_USER = 'User';
const LOGIN_ADMIN = 'Admin';
const USER_PASS = 'UserPass';
const ADMIN_PASS = 'RootPass';
const MIN_LOGIN_LENGTH = 4;
const HOUR_FIRST = 8;
const HOUR_SECOND = 20;
const CURRENT_HOUR = new Date().getHours();

const ERR_CANCELED = 'Canceled';
const ERR_WRONG_LOGIN_4SYMB = 'I don\'t know any users having name length less than 4 symbols';
const ERR_WRONG_LOGIN = 'I don’t know you';
const ERR_WRONG_PASS = 'Wrong password';

const GREETS_GOOD_DAY_USER = 'Good day, dear User!';
const GREETS_GOOD_DAY_ADMIN = 'Good day, dear Admin!';

const GREETS_GOOD_EVENING_USER = 'Good evening, dear User!';
const GREETS_GOOD_EVENING_ADMIN = 'Good evening, dear Admin!';

let login = prompt('Enter your Login:', '');

if (!login || 0 === login.length){
	alert(ERR_CANCELED);
}else if(login.length < MIN_LOGIN_LENGTH){
	alert(ERR_WRONG_LOGIN_4SYMB);
}else if(login === LOGIN_USER || login === LOGIN_ADMIN){
	let pass = prompt('Enter your Password:', '');
	if (!pass || 0 === pass.length){
		alert(ERR_CANCELED);
	}else if(login === LOGIN_USER && pass === USER_PASS || login === LOGIN_ADMIN && pass === ADMIN_PASS){
		if(login === LOGIN_USER){
			if(CURRENT_HOUR>=HOUR_FIRST && CURRENT_HOUR<HOUR_SECOND){
				alert(GREETS_GOOD_DAY_USER);
			}else{
				alert(GREETS_GOOD_EVENING_USER);
			}
		}
		if(login === LOGIN_ADMIN){
			if(CURRENT_HOUR<HOUR_FIRST && CURRENT_HOUR>=HOUR_SECOND){
				alert(GREETS_GOOD_DAY_ADMIN);
			}else{
				alert(GREETS_GOOD_EVENING_ADMIN);
			}
		}
	}else{
		alert(ERR_WRONG_PASS);
	}
}else{
	alert(ERR_WRONG_LOGIN);
}
