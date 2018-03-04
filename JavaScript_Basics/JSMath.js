function zeroNegativity(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i]<0){
      return false;
    }
  }
  return true; 
}

zeroNegativity([0, -1, 3]);
//this returns true if all numbers in an array are not negative
//returns false if there is a negative number


function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

isEven(5);
//this returns true if the number is even 
//returns false if the numbers are odd

function howManyEven(arr){
  var count = 0;
  for(let i = 0; i<arr.length; i++){
    if(isEven(arr[i])){
      count += 1;
    }
  }
  return count; 
}

howManyEven([-1, 3, 6, -4, 6, 4, 7]);
//this function calls isEven to determine how many numbers in a given array are even

function createDummyArray(num){
  var dummyarray = [];
  for(let i = 0; i < num; i++){
  	//i has to either start at 0 and run < num 
  	//or start at 1 and run <= num
    dummyarray.push(Math.floor(Math.random()* 10));
    //math random goes up to but does not include the number you times it by
  }
  return dummyarray;
}

createDummyArray(2);
//this function returns an array with random numbers between 0 and 9 (num) amount of times

function randomChoice(arr){
  x = Math.floor(Math.random()* (arr.length));
  //note we multiplied times length of array since both math random and arrays start at 0 
  return arr[x];
}

randomChoice([2, 7, 4, 6]);