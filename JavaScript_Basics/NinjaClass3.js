class Ninja {
	constructor(name){
		this.name = name;
		this.health = 100; 
		this.speed = 3; 
		this.strength = 3; 
	}

	sayName() {
		console.log('My ninja name is ' + this.name);
		return this; 
	}

	showStats() {
		console.log('Strength: '+this.strength + ' Speed: '+ this.speed + ' Health: ' + this.health);
		return this; 
	}

	drinkSake(){
		this.health += 10; 
		return this;
	}
}

class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.health = 200;
		this.speed = 10; 
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		super.drinkSake();
		console.log('Thou shall not throw shade if thou cannot thorw hands!');
		return this; 
	}

}

const ninja1 = new Ninja("Dima");
ninja1.sayName().showStats().drinkSake().showStats();
const ninja2 = new Sensei('Eric');
ninja2.sayName().showStats().speakWisdom().showStats();