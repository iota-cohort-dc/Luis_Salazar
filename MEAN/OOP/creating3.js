function Vehicle(name,num_wheels,num_pass,speed) {
	// var vehicle = {};
	this.distance_traveled = 0;
	this.name = name;
	this.num_wheels = num_wheels;
	this.num_pass = num_pass;
	this.speed = speed

	Vehicle.prototype.makeNoise = function(){
		console.log('Name:'+ this.name);
		return this;
	}
	this.updateDistance = function(){
		this.distance_traveled += speed;
		return this;
	}
	Vehicle.prototype.move = function(){
		this.updateDistance();
		this.makeNoise();
		return this;
	}
	Vehicle.prototype.checkMiles = function(){
		console.log('You traveled' +" "+ this.distance_traveled +" "+ 'miles');
		return this;
	}
	Vehicle.prototype.vin = function() {
		min = Math.ceil(1000);
		max = Math.floor(5000)
		vinNum = Math.floor(Math.random()*(max - min)) + min;
		console.log("Vin Number is: ", vinNum);
		return this;
	};
}
var bike =  new Vehicle('Bicyle',1,2, 20);
var sedan = new Vehicle('Sedan',4,5,60);
var bus = new Vehicle('Bus',6,30,30);

// bike.makeNoise = function(){
// 	console.log("Ring Ring");
// 	return this;
// }
// bike.makeNoise();

// sedan.makeNoise = function(){
// 	console.log('Honk Honk!');
// 	return this;
// }
// // sedan.makeNoise();

// bus.pickUp = function(num){
// 	bus.num_pass += num;
// 	console.log(bus.num_pass);
// 	return this;
// }
// bus.pickUp(12)

bus.move().checkMiles().vin();
bike.move().checkMiles().vin();
sedan.move().checkMiles().vin();



