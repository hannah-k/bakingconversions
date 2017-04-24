var question = prompt("How many gallons do you want to convert to liters");

var liter = function(number1) {
	return number1 * 3.785;
};

alert(liter(parseInt(question)));

var question2 = prompt("How many cups do you want to convert to ounces?");
var ounces = function(cups) {
 	return cups * 8;
};

alert(ounces(parseInt(question2)));

var question3 = prompt("How many liters do you want converted to pints?");
var pints = function(liters) {
	return liters * 2.11;
};

alert(pints(parseInt(question3)));
