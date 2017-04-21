console.log('Wall Controller');
myApp.controller('WallController',['$scope','UsersFactory','WallFactory','$location','$cookies',function ($scope,UsersFactory,WallFactory,$location,$cookies) {
    $scope.user = $cookies.get('user_name');
	$scope.messages = {};
	$scope.newComment = {};

	if(!$scope.user){
		$location.url('/')
	}
	var index = function(){
		WallFactory.index(function(data){
			console.log(data);
			$scope.messages = data.message;
		})
	}
	index();
    $scope.create = function(user){
    	WallFactory.create($scope.newMessage,user, function(data){
    		$scope.newMessage = {}
    		index()
    	})
    }
    $scope.createComment = function(message_id,idx){
    	console.log($scope.newComment)
    	WallFactory.createComment($scope.newComment[idx],message_id,$scope.user,function(data){
    		console.log($scope.comments)
    		$scope.newComment = {}
    		index()
    	})
    }
}])