var x = []; 
console.log(x);
x.push('coding','dojo', 'rocks');
x.pop(x[2]);
console.log(x);
//The final result is "coding, dojo" 

const y = [];
console.log(y);
y.push(88); 
console.log(y);
//The final result pushed 88 into the empty array

var z = [9, 10, 6, 5, -1, 20, 13, 2];
for(let i = 0; i< z.length; i++){
	console.log(z[i]);
}
for(let i = 0; i< z.length-1; i++){
	console.log(z[i]);
}
//The result printed all numbers in first loop and all numbers except the final number in the second loop


var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for(let i = 0; i< names.length; i++){
	console.log(names[i].length);
}
for(let x = 0; i< names.length; i++){
	if(names[x].length >= 5){
		console.log(names[x]);
	}
}

function yell(string) {
	return string.toUpperCase();
}
yell('hello');


