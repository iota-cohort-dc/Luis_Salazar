var myApp = angular.module('myApp',['ngRoute','ngCookies']);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html'
	})
	.when('/messages',{
		templateUrl:'partials/wall.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});