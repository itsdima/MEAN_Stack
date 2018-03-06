var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name; 
};

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Bill = new Person('Bill');
var Eric = new Person('Eric');

var people = [James, Bill, Eric];

people.forEach(function(person){
	person.on('speak', function(mssg){
		console.log(person.name + ' said: ' + mssg);
	});
});

James.emit('speak', 'whats up!');
Bill.emit('speak', 'Im so full!');