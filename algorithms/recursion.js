// ******************* RECURSIVE SIGMA **********************
function sigma(num) {
	if (num == 1){
		return num;
	}
	else {
		return num + sigma(num - 1);
	}
}

// console.log(sigma(3));

// ******************* RECURSIVE FIBINACHI *******************
function rFib(num){
	if(num == 0 || num == 1){
		return num
	}
	else{
		return rFib(num - 1) + rFib(num - 2);
	}
}
console.log(rFib(6));