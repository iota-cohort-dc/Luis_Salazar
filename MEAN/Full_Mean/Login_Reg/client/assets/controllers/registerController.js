myApp.controller('registerController',["$scope","userFactory","$location","$cookies",function ($scope,userFactory,$location,$cookies) {
	$scope.user = $cookies.get('user_name');
	$scope.messages = [];

    if(!$scope.user){
        $location.url('/')
    }

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
                console.log("USERNAME",data.username)
                $cookies.put("user_name", data.username);

                console.log($cookies.get("user_name"));
                $location.url("/success");
            }
        })
    },
    $scope.login = function(){
    	userFactory.login($scope.user, function(data){
    		if(data.errors){
    			$scope.messages.push(data.errors);
    			$location.url('/login');
    		}
    		else{
    			$cookies.put('user_name',data.username);
    			console.log($cookies.get('user_name'));
    			$scope.user = data;
    			console.log(data)
    			console.log($scope.user)
    			$location.url('/success');
    		}
    	})
    },
    $scope.logout = function(){
    	var cookies = $cookies.getAll();
    	angular.forEach(cookies,function(v,k){
    		$cookies.remove(k);
    	});
    	console.log("User name", $cookies.get('user_name'));
    	$location.url('/');
    }

}]);