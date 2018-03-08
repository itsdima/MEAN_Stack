var _ = {

	map: function(arr, callback){
		for(let i = 0; i < arr.length; i++){
			callback(arr[i]);
		}
	},

	reduce: function(){

	},

	find: function(){

	},

	filter: function(){

	},

	reject: function(){

	}

}


_.map([1, 2, 3], function(num){ return num * 3; });
