var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

//calling the variable name and then adding parenthesis after it,
//pretending its a function and then passing arguments into that parenthesis
//these arguments are then passed to the anonymous function inside
//the variable, the function runs, some result is returned and then we're console logging the result
//as if everything was a function
console.log(theBiggest(7/9,13/25));
console.log(theBiggest);

var theBiggestt = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/9,13/25)
//envoke it by adding a set of parenthesis at the end
//because of the aarguments below, we need to plase those arguments
//inside this new set of parenthesis
//console.log(theBiggestt(7/9,13/25));
console.log(theBiggestt);

//the browser runs the function when it is encountered