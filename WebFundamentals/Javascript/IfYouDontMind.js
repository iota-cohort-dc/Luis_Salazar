// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

function time(HOUR,MINUTE,PERIOD){

if( MINUTE > 30){
	MINUTE = "its almost";
	HOUR += 1;
}
else( MINUTE = "It's just after");

if(PERIOD == "AM"){
	PERIOD = "in the morning";
}
else(PERIOD = "in the evening");

console.log(MINUTE, HOUR, PERIOD);}

time(9,31,"PM");



