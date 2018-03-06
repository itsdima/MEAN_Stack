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
	
	this.punch = function(target){
	  if(target instanceof Ninja){
  	  target.health -= 5; 
  	  console.log(target.name + ' was hit by ' + this.name + ' and lost 5 Health!');
  	  return this; 
	  }
	  else{
	    console.log('Dont punch that');
	    return this;
	  }
	};
	
	this.kick = function(target){
	  if(target instanceof Ninja){
  	  let lostHealth = 15 * strength;
  	  target.health -= lostHealth;
  	  console.log(target.name + ' was kicked by ' + this.name + ' and lost ' + lostHealth + ' Health!');
	  }
	  else {
	    console.log('Dont kick that!');
	  }
	  return this; 
	};


}

const ninja1 = new Ninja('Dima');
const ninja2 = new Ninja('Quon');
ninja1.punch(ninja2).kick('bucket');
ninja2.kick(ninja1).punch('tree');
ninja1.showStats();
ninja2.showStats();