console.log('Users Factory');
myApp.factory('userFactory', ['$http',function ($http) {
	var factory = {};

	factory.create = function(newUser, callback){
		console.log('factory info', newUser)
		$http.post('/users',newUser).then(function(returned_data){
			console.log("returned_data",returned_data.data);
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}			
		})
		.catch(function(err){
			console.log(err);
		});
	},
	factory.login = function(user,callback){
		$http.post('/login',user).then(function(returned_data){
			console.log("returned_data",returned_data.data);
			if(typeof(callback) == 'function'){
				callback(returned_data.data);
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}
	return factory;
}])