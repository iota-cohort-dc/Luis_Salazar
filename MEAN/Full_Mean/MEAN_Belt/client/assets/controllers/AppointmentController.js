myApp.controller('AppointmentController',['$scope','UsersFactory','AppointmentFactory','$location','$cookies','$parse',function ($scope,UsersFactory,AppointmentFactory,$location,$cookies,$parse) {
	$scope.user = $cookies.get('user_id');
	$scope.appoints = [];
	$scope.date = new Date();
	$scope.messages = [];
	if(!$scope.user){
		$location.url('/')
	}

	var index = function () {
	  AppointmentFactory.index(function(data) {
	      console.log(data.appoint);
	      $scope.appoints = data.appoint;
	  })
	}
	index()
	$scope.create = function(){
		if($scope.newAppoint.date <= $scope.date){
			$scope.newAppoint = {}
			$scope.messages.push("Please enter a future date. Thank you.")
			$location.url('/appointment')

		}
		else{
			AppointmentFactory.create($scope.newAppoint,$scope.user, function(data){
				if(data.errors){
					if(typeof(data.errors) == 'object'){
						angular.forEach(data.errors,function(v,k){
							$scope.messages.push(data.errors[k].message)
						});
					$location.url('/appointment')
					}
					else{
					$scope.messages.push(data.errors);
					$location.url('/appointment')
					}
				}
				else{
				$scope.appoints = data;
				$scope.newAppoint = {};
				$location.url("/dashboard")
				}
			})
		}
	}
}])
