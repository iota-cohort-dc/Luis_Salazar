myApp.controller('registerController',["$scope","userFactory","$location","$cookies",function ($scope,userFactory,$location,$cookies) {
	$scope.users = $cookies.get('user_first');
	$scope.messages = [];

    $scope.create = function(){
        userFactory.create($scope.newUser, function(data){
            if(data.errors){
                console.log(data);
                console.log(typeof(data.errors));
                if(typeof(data.errors) == "object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    })
                }
                else{
                    $scope.messages.push(data.errors);
                }
                $location.url("/");
            }
            else{
                $cookies.put("user_first", data.first);

                console.log($cookies.get("user_id"));
                $location.url("/success");
            }
        })
    },
    $scope.login = function(){
    	userFactory.login($scope.users, function(data){
    		if(data.errors){
    			$scope.messages.push(data.errors);
    			$location.url('/login');
    		}
    		else{
    			$cookies.put('user_first',data.first);
    			console.log($cookies.get('user_first'));
    			$scope.users = data;
    			console.log(data)
    			console.log($scope.users)
    			$location.url('/success');
    		}
    	})
    },
    $scope.logout = function(){
    	var cookies = $cookies.getAll();
    	angular.forEach(cookies,function(v,k){
    		$cookies.remove(k);
    	});
    	console.log("User id", $cookies.get('user_first'));
    	$location.url('/');
    }

}]);