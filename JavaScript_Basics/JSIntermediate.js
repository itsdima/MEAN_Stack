function starString(num){
  string = '*';
  return string.repeat(num);
}

starString(10);
//this function takes a number and prints the string * num amount of times

function drawStars(arr){
  string = '*';
  for(let i = 0; i < arr.length; i++){
    console.log(string.repeat(arr[i]));
  }
}

drawStars([1, 3, 6, 19, 10, 6, 2, 1, 2, 1]);
//this function takes an array and returns * times each value in the array

function drawStars(arr){
  str = '*';
  for(let i = 0; i < arr.length; i++){
    if(arr[i].constructor == Number){
      console.log(str.repeat(arr[i]));
    }
    else if(arr[i].constructor == String){
      arr[i] = arr[i].toLowerCase();
      console.log(arr[i].charAt(0).repeat(arr[i].length));
    }
  }
}

drawStars([1,'booooyyyyyyyyy', 3, 6, 'Hello', 'Bye', 3]);
//this function checks for the constructor of the value of an array and returns * times a number
//or returns first letter in a string times the string length (in lower case)
