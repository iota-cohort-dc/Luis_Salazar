var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/main.html'
	})
	.when('/new',{
		templateUrl:'partials/new.html'
	})
	.when('/edit/:id',{
		templateUrl:'partials/edit.html'
	})
	.when('/show/:id',{
		templateUrl:'partials/show.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});
