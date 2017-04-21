console.log('Friends Factory');
myApp.factory('friendsFactory',['$http',function($http) {
	var factory = {};
	factory.index = function(callback){
		$http.get('/friends').then(function(returned_data){
			// console.log(returned_data.data);
			callback(returned_data.data);

		});
	}
	factory.create = function(newfriend, callback) {
		$http.post('/friends', newfriend).then(function(returned_data){
			console.log(returned_data.data);
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		});
	}
	factory.delete = function(data,callback){
		$http.delete('/friends/'+data).then(function(returned_data){
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		})
	}
	factory.show = function(data,callback){
		$http.get('/friends/'+data).then(function(returned_data){
			if(typeof(callback)=='function'){
				callback(returned_data.data);
			}
		})
	}
	factory.update = function(data,callback){
		console.log("hit the factory",data._id)
		$http.put('/friends/'+data._id, data).then(function(returned_data){
			console.log('UPDATED', returned_data.data)
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		})
	}

	return factory;
}])