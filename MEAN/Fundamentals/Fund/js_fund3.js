function personConstructor(name) {
	var person = {
	name : name,
	distance_traveled : 0,

	say_name : function(){
		console.log(person.name);
	},
	say_something : function(param){
	 console.log(person.name,'says',param);
	},
	walk : function(){
		console.log(person.name + ' ' + 'is walking'); 
		person.distance_traveled +=3; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},

	run : function(){
		console.log(person.name + " " + 'is running'); 
		person.distance_traveled += 10; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},

	crawl : function(){
		console.log(person.name + " " + 'is crawling'); 
		person.distance_traveled += 1; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},
}
// person.run()
}
// personConstructor('Jeff')

function ninjaConstructor(name,cohort){
	var ninja ={
		name : name,
		cohort : cohort,
		belt : 'Yellow Belt',

		levelUp:function(){
			console.log(`${ninja.name} leveled up to a... `) 
			ninja.belt = 'Black Belt';
			console.log(`${ninja.belt} `) 

		}
	}
	ninja.levelUp()
}

ninjaConstructor('Luis','Iohta')

