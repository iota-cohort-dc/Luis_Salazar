function VehicleConstructor(name,num_wheels,num_pass) {
	var vehicle = {};
	vehicle.name = name;
	vehicle.num_wheels = num_wheels;
	vehicle.num_pass = num_pass;

	vehicle.makeNoise = function(){
		console.log('Name:'+ vehicle.name);
	}
	return vehicle;
}
var bike = VehicleConstructor('Bicyle',1,2);
var sedan = VehicleConstructor('Sedan',4,5)
var bus = VehicleConstructor('Bus',6,30);

bike.makeNoise = function(){
	console.log("ring ring");
}
bike.makeNoise();

sedan.makeNoise = function(){
	console.log('Honk Honk!');
}
sedan.makeNoise();

bus.pickUp = function(num){
	bus.num_pass += num;
	console.log(bus.num_pass);
}

bus.pickUp(12)