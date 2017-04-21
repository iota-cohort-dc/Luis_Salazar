var myApp = angular.module('myApp',['ngRoute','ngCookies']);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/register.html'
	})
	.when('/login',{
		templateUrl:'partials/login.html'
	})
	.when('/success',{
		templateUrl:'partials/success.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});