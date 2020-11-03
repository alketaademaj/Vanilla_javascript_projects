function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result; //local variable scope
    //using it outside, we use the return in functions technically

	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

var firstFraction = 7/16; //global variable scope
var secondFraction = 13/25; //you can access anywhere

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");

//global variables are stored in the browser memory for as long as the script runs
//local variables don't take up valuable recources
//->they are used, then discarded when we leave the scope
