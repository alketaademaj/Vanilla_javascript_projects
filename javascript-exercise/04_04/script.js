function findBiggestFraction(a,b) {
    //a new variable
    var result; 
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}


var firstFraction = 3/4;
var secondFraction = 5/7;

//two options to display it
console.log(findBiggestFraction(firstFraction,secondFraction));

var fractionResults = findBiggestFraction(firstFraction,secondFraction);
console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResults[0] + " with a value of " + fractionResults[1] 0 " is the biggest!")
console.log(fractionResults);