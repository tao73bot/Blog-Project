class Player {
	constructor(name, age, skill) {
		this.name = name;
		this.age = age;
		this.skill = skill;
	}
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}


const sakib = new Player('Sakib', 35, 'All-rounder');
sakib.sayHello(); // Hello, my name is Sakib