function Ninja(name){
	let strength = 3;
	let speed = 3; 
	this.health = 100; 
	this.name = name; 

	this.sayName = function(){
		console.log('My ninja name is '+ this.name);
		return this; 
	};

	this.showStats = function(){
		console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
		return this;
	};

	this.drinkSake = function(){
		this.health += 10;
		return this;
	};


}



const ninja1 = new Ninja('Dima');
ninja1.sayName().showStats().drinkSake().showStats();