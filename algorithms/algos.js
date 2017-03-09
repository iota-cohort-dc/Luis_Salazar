//algo challange
function acronym(str){
var newStr=" ";
for (var i = 0; i<str.length; i++) {
	if(str[i]==" " && str[i+1] !== " "){
		newStr[newStr.length]=str[i+1]
	}
	newStr = newStr.toUpperCase()
}
// return newStr;
console.log(newStr);
}
acronym("Hello World cool")
//***************************