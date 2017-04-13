function runningLogger(){
	console.log('I am running!')
}
// runningLogger();

function multiplyByTen(val){
	byTen = val * 10;
	console.log(byTen);
}
// multiplyByTen(5);

function stringReturnOne(){
	console.log('Charizard I choose You!');

}
function stringReturnTwo(){
	console.log('Use Flamthower!');

}
// stringReturnOne();
// stringReturnTwo();

function caller(param){
	if(typeof(param) == 'funciton'){
		param();
	}
}
caller();

function myDoubleConsoleLog(param,arg){
	if (typeof(param) == 'function'){
		param();
	}
	if (typeof(arg) == 'function'){
		arg();
	}
}
// myDoubleConsoleLog(stringReturnOne(),stringReturnTwo())

function caller2(param){

	console.log('starting');

	var x = setTimeout(function(){
		if (typeof (param)  == 'function'){
			param(stringReturnOne,stringReturnTwo);
			console.log('ending');
		}
	},2000);
	return 'interesting'
}

caller2(myDoubleConsoleLog);