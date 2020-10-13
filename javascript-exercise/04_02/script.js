//create a function
//define it
function findBiggestFractionS() {
    //the logic to compare the fractions/variables a and b
    a > b ? console.log("a: ", a) : console.log("b: ", b);
    console.log("testing if this is working");
}
//Define variables before calling the function, everything will work fine
var a = 3/4;
var b = 5/7;

//to get a function to run, call it by it's name
findBiggestFractionS();

//------------------------------------------>
//passing whatever values I want into the function
//and then have it run on those values, so I can reuse the function again
//-> possible with arguments

function findBiggestFraction(a,b) {
    //a will become a inside the codeblock and b will become b inside the codeblock
    //not to be confused with the variables outside of the function

    //the logic to compare the fractions/variables a and b
    a > b ? console.log("a: ", a) : console.log("b: ", b);
    console.log("testing if this is working");
}
//Define variables before calling the function, everything will work fine
var first = 3/4;
var second = 5/7;
//you pass the arguments here when it's called
findBiggestFraction(first, second);
findBiggestFraction(7/16, 13/25);



