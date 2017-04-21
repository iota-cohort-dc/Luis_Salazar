console.log('Wall Factory');
myApp.factory('WallFactory',['$http',function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/messages').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newMessage,user,callback){
		$http.post('/messages/'+user, newMessage).then(function(returned_data){
			if(typeof(callback)=='function'){
				console.log('returned_data',returned_data.data)
				callback(returned_data.data);
			}
		})
	}
	factory.createComment = function(newComment,message_id,user,callback){
		console.log(newComment)// Testing to make sure info is getting passed from Controller
		console.log(user)
		$http.post('/comment/'+message_id+'/'+user,newComment).then(function(returned_data){
			if(typeof(callback)=='function'){
				console.log('returned_data for comment',returned_data.data)
				callback(returned_data.data);
			}			
		})
	}

	return factory;
}])