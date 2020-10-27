//define two variables
var a = 3/4;
var b = 5/7;

//create new variables
//contains the anonymous function 
var theBiggest = function(a, b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    //console.log(result);
    return result;
    //anonymous function is placed inside a variable as a function to expression,
    //meaning it is stored as if it were a normal value and only executes if we call the variable as if it were a function 
}

//to get the function run, call the variable
//theBiggest();

//using the arguments here, so doesn't matter how we defined it before
//they just map to a and b inside anonymous function
console.log(theBiggest(7/9, 13/25));