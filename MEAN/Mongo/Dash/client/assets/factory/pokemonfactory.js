myApp.factory('pokemonFactory',['$http',function ($http) {
	var factory = {};
	factory.getPokemon = function(callback){
		callback(pokemon);
	}
});