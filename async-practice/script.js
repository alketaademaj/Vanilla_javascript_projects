//callback exercise
//--> create a post
// var tans = [
//   { title: "Post1", body: "This is body of post one" },
//   { title: "Post2", body: "This is body of post two" },
// ];
// // definition part
// let postSend = (post, callback) => {
//   //arrow function
//   setTimeout(() => {
//     console.log("hello");
//     tans.push(post);
//   }, 10000);
//   callback();
//   //callback1({title:'Post4',body:'This is body of post four'});
// };

// var callback1 = (postfour) => {
//     tans.push(postfour)
// }

// const getPost = () => {
//   setTimeout(() => {
//     console.log(tans);
//   }, 1000); //callback function
// };

// // execution part
// postSend({ title: "Post3", body: "This is body of post three" }, getPost);
// getPost()//you ar enow only supposed to this post I mean the post numbered 1

//whenever we are in a class, the functions are called methods
//

// var third = array + secondArray
// console.log(third)

// var string = "xdxd"
// var stringstring = "blablabla"
// string = string + stringstring
// console.log(string)

//order example:
// 1. Making ajax request and getting data back from the backend / server
// 2. Processing that data which we got back <3
// 3. Display / render the data

//the difference between async await and promise is the execution
//

//defining the array
// var alketa = ["Apple", "Banana", "Pear", "Watermelon", "Strawberry"];

// //defining the function

// function fruitbasket(berry, myname) {
//   setTimeout(() => {
//     alketa.push(berry);
//     console.log(myname);
//   }, 2000); // executing the function
// }

// function fourthLargest() {
// continue
// }

// function getFruits1(fruits, berry1, fruity, tans) {
//   console.log("our program started !!!");
//   fruity(fruits, berry1, tans);
// }
// function getFruits(fruits, one, two) {
//   setTimeout(() => {
//     console.log(alketa);
//     fruits(one, two);
//   }, 3000);
//   setTimeout(() => {
//     console.log(alketa);
//   }, 3000);
// }

//execute the function
// fruitbasket(getFruits1, "Blueberry", getFruits); //instead of this
// getFruits1(fruitbasket, "Blueberry", getFruits, "Tans");
// our program started !!!
// (wait for 3 sec)
// [dsdfsfbd]
// (wait for 2 sec)
// push
// (wait  for 3 sec)
// [dfdssdfsdf]




//------------------------------------------------------------

function Name (theName) { //child 1
    var message = `Welcome ${theName}, now you are part of functional javascript world.`; //template literals
        return message;
}

function Geometric(theRounds) { //child 2

}

function Fibonacci(theCycle) { //child 3
    var result = [];
    var temp = [];
    for(var x=0; x<=theCycle; x++) {
        result = temp[x] + temp[x-1]
    }
    return result; 
}

function Execution(theChoice, theParam) { //parent
    console.log(Name("Tanay"));
    console.log(Fibonacci(6))
}

Execution()
