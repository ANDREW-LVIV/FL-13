'use strict';

function Fighter (obj) {
	const INITIAL_HEALTH = obj.hp;
	let win = 0;
	let loss = 0;	
	this.getName = () => obj.name;
	this.getDamage = () => obj.damage;
	this.getHealth = () => obj.hp;
	this.getStrength = () => obj.strength;
	this.getAgility = () => obj.agility;
	this.attack = (defender) => {
		const HUNDRED = 100;
		let randomAttackPoint = Math.floor(Math.random() * HUNDRED);
		let currentAttackPoint = Math.floor(Math.random() * Math.floor(this.getStrength() + this.getAgility()));
		if (randomAttackPoint <= currentAttackPoint) {
			defender.dealDamage(this.getDamage());
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
	this.heal = (value) => {
		obj.hp = this.getHealth() + value <= INITIAL_HEALTH ? this.getHealth() + value : INITIAL_HEALTH;
	}
	this.dealDamage = (value) => {
		obj.hp = this.getHealth() - value >= 0 ? this.getHealth() - value : 0;
	}
	this.addWin = () => ++win;
	this.addLoss = () => ++loss;
	this.logCombatHistory = () => {
		console.log(`Name: ${this.getName()}, Wins: ${win}, Losses: ${loss}`);
	}
}

function battle(fighter1, fighter2) {
	if(fighter1.getHealth() === 0) {
		console.log(`${fighter1.getName()} is dead and can't fight`);
		return;
	}
	if(fighter2.getHealth() === 0) {
		console.log(`${fighter2.getName()} is dead and can't fight`);
		return;
	}
	while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0 ) {
		fighter1.attack(fighter2);
		if (fighter2.getHealth() > 0) {
			fighter2.attack(fighter1);
			if (fighter1.getHealth() === 0) {
				fighter2.addWin();
				fighter1.addLoss();
				console.log(`${fighter2.getName()} has won!`);
			}
		} else {
			fighter1.addWin();
			fighter2.addLoss();
			console.log(`${fighter1.getName()} has won!`);
		}

	}
}

const fighter1 = new Fighter({
	name: 'Maximus',
	damage: 20,
	hp: 100,
	strength: 20,
	agility: 15
});
const fighter2 = new Fighter({
	name: 'Commodus',
	damage: 25,
	hp: 90,
	strength: 25,
	agility: 20
});

battle(fighter1, fighter2);