
myApp.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory,$location) {
  $scope.friends = {};
  var index = function () {
      friendsFactory.index(function(data) {
          // console.log(data);
          $scope.friends = data.friends;

      })
  }
  index();
  $scope.create = function() {
      friendsFactory.create($scope.newFriend, function(data) {
          $scope.friends = data;
          $location.url('/')
      });
  }
  $scope.delete = function(data){
    friendsFactory.delete(data);
    index();
  }

}]);