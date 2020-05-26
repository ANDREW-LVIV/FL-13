function Transport () {
	this.currentSpeed = 0;
	const maxSpeedMotorcycle = 30;
	const speedStepUp = 2000;
	const speedStepDown = 1500;
	this.maxSpeedCounter = 0;

	this.getInfo = function () {
		const result = {
			'engine': this.engine,
			'color': this.color,
			'maxSpeed': this.maxSpeed			
		}
		if (this.model) {
			result['model'] = this.model;
		} else {
			result['model'] = 'unknown model';
		}
		return result;
	}

	let fadeOutDelay = null;
	this.drive = function() {
		if(fadeOutDelay) {
			clearInterval(fadeOutDelay);
		}
		if (this.currentSpeed > 0){
			console.log('Already driving');
		}else{
			if(this.name === 'Motorcycle'){
				console.log('Let’s drive');
			}
		}
		fadeOutDelay = setInterval(() => {
			this.currentSpeed += 20;
			this.maxSpeedCounter += 20;
			console.log(this.currentSpeed);
			if(this.currentSpeed > this.maxSpeed){
				console.log('speed is too high, SLOW DOWN!');
			}
			if(this.name === 'Motorcycle ' && this.currentSpeed >= maxSpeedMotorcycle){
				console.log('Engine overheating');
			}
		}, speedStepUp);

	}

	this.stop = function() {
		if(fadeOutDelay) {
			clearInterval(fadeOutDelay);
		}
		if(this.currentSpeed < this.maxSpeedCounter){
			console.log('Already slows down');
		}
		if (this.currentSpeed > 0){
			fadeOutDelay = setInterval(() => {
				this.currentSpeed -= 20;
				console.log(this.currentSpeed);
			if(this.currentSpeed <= 0){
				clearInterval(fadeOutDelay);
			}
			if(this.name === 'Motorcycle' && this.currentSpeed <= 0){
				console.log(this.name + ' ' + this.model + this.engine + ' is stoped. Good drive');
			}
			if((this.name === 'Vehicle' || this.name === 'Car') && this.currentSpeed <= 0){
				console.log(this.name + ' is stopped. Maximum speed during the drive was ' + this.maxSpeedCounter);
			}
			}, speedStepDown);
		}
	}

	this.upgradeEngine = function(newEngine, maxSpeed) {
		if(this.currentSpeed>0){
			console.log('plese, stop a car first');
		}else{
			this.engine = newEngine;
			this.maxSpeed = maxSpeed;			
		}
	}

	this.changeColor = function(newColor) {
		if(this.currentSpeed>0){
			console.log('plese, stop a car first');
		}else if (this.color === newColor) {
			return 'The selected color is the same as the previous, please choose another one';
		} else{
			this.color = newColor;
		}
	}
}

function Vehicle(color, engine) {
	Transport.call(this, Vehicle);
	this.name = 'Vehicle';
	this.color = color;
	this.engine = engine;
	this.maxSpeed = 70;
}

function Car(model, color, engine) {
	Transport.call(this, Car);
	this.name = 'Car';
	this.color = color;
	this.engine = engine;
	this.model = model;
	this.maxSpeed = 80;
}

function Motorcycle (model, color, engine) {
	Transport.call(this, Motorcycle);
	this.name = 'Motorcycle';
	this.color = color;
	this.engine = engine;
	this.model = model;
	this.maxSpeed = 90;
}

// const vehicle = new Vehicle('red', 'v8');
// const car = new Car('Toyota', 'black', 'v8');
// const motorcycle = new Motorcycle('Suzuki', 'white', 'GSX-R600');

// console.log(vehicle.getInfo());

// console.log(car.getInfo());
// console.log(car.changeColor('black'));
// console.log(car.changeColor('orange'));
// console.log(car.upgradeEngine('V8', 140));
// console.log(car.getInfo());

// console.log(motorcycle.getInfo());
// console.log(motorcycle.drive());
// console.log(motorcycle.stop());