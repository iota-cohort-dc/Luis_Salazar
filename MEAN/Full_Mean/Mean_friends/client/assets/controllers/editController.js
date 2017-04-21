myApp.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location',function($scope, friendsFactory, $routeParams,$location) {
  $scope.friend={}

   friendsFactory.show($routeParams.id, function(returnedData){
     $scope.friend = returnedData;
   });
   $scope.update = function(){
    console.log("hit the controller",$scope.friend)
    friendsFactory.update($scope.friend,function(returneddata){
      $location.url('/')
    });

   }

}]);