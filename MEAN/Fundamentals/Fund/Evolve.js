var run = () => {
	console.log('I am running!')
}
run();

var personConstructor = (name) => {
	var person = {
	name : name,
	distance_traveled : 0,

	say_name : () => {
		console.log(person.name);
	},
	say_something : (param) => {
	 console.log(person.name,'says',param);
	},
	walk : () => {
		console.log(person.name + ' ' + 'is walking'); 
		person.distance_traveled +=3; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},

	run : () => {
		console.log(person.name + " " + 'is running'); 
		person.distance_traveled += 10; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},

	crawl :() => {
		console.log(person.name + " " + 'is crawling'); 
		person.distance_traveled += 1; 
		console.log("Distance Traveled:" +" "+ person.distance_traveled)
		},
}
person.run()
}
personConstructor('Jeff')

var ninjaConstructor = (name,cohort) =>{
	var ninja ={
		name : name,
		cohort : cohort,
		belt : 'Yellow Belt',

		levelUp:()=>{
			console.log(`${ninja.name} leveled up to a... `) 
			ninja.belt = 'Black Belt';
			console.log(`${ninja.belt} `) 

		}
	}
	ninja.levelUp()
}

ninjaConstructor('Luis','Iohta')