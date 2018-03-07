module.exports = function(){
	return{
		add: function(num1, num2){
			console.log(num1 + ' plus ' + num2 + ' equals ' + (num1 + num2));
		},

		multiply: function(num1, num2){
			console.log(num1 + ' times ' + num2 + ' equals ' + num1 * num2);
		},

		square: function(num){
			console.log('Squared: ' + num * num);
		},

		random: function(num1, num2){
			console.log('Random number: ' + Math.floor(Math.random() * (num2 - num1) + num1));
		}
	}
};