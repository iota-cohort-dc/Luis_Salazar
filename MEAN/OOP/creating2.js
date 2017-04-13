function VehicleConstructor(name,num_wheels,num_pass,speed) {
	// var vehicle = {};
	var distance_traveled = 0;
	this.name = name;
	this.num_wheels = num_wheels;
	this.num_pass = num_pass;
	this.speed = speed

	this.makeNoise = function(){
		console.log('Name:'+ vehicle.name);
	}
	var updateDistance = function(){
		distance_traveled += speed;
	}
	this.move = function(){
		updateDistance();
		this.makeNoise();
	}
	this.checkMiles = function(){
		console.log('You traveled' +" "+ distance_traveled +" "+ 'miles');
	}
	// return vehicle;
}
var bike =  new VehicleConstructor('Bicyle',1,2, 20);
var sedan = new VehicleConstructor('Sedan',4,5,60)
var bus = new VehicleConstructor('Bus',6,30,40);

bike.makeNoise = function(){
	console.log("Ring Ring");
}
// bike.makeNoise();

sedan.makeNoise = function(){
	console.log('Honk Honk!');
}
// sedan.makeNoise();

bus.pickUp = function(num){
	bus.num_pass += num;
	console.log(bus.num_pass);
}
// bus.pickUp(12)

bike.move();
bike.checkMiles();