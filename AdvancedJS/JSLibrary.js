var _ = {

	map: function(arr, callback){
	  newArr = [];
		for(let i = 0; i < arr.length; i++){
			newArr.push(callback(arr[i]));
		}
		return newArr;
	},

	reduce: function(arr, callback, memo){
	  var index;
	  if(memo === undefined){
	    memo = arr[0];
	    index = 1;
	  }
	  else{
	     index = 0;
	  }
	  var sum = memo; 
	  for(let i = index; i < arr.length; i++){
	    sum = callback(sum, arr[i]);
	  }
    return sum;
	},

	find: function(arr, callback){
    for(let i = 0; i< arr.length; i++){
      if(callback(arr[i])===true){
        return arr[i];
      }
    }
    return false;
	},

	filter: function(arr, callback){
    var newArr = [];
    for(let i = 0; i< arr.length; i++){
      if(callback(arr[i])===true){
        newArr.push(arr[i]);
      }
    }
    return newArr;
	},

	reject: function(arr, callback){
    var newArr = [];
    for(let i = 0; i<arr.length; i++){
      if(callback(arr[i])===false){
        newArr.push(arr[i]);
      }
    }
    return newArr;
	}

};

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.reduce([4, 1, 2, 3], function(memo, num){ return memo + num; }, 6));
console.log(_.find([1, 5, 3, 1, 5, 7], function(num){ return num % 2 === 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 7], function(num){ return num % 2 === 0; }));

