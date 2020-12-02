//callback exercise 
//--> create a post
var tans = [
    {title:'Post1',body:'This is body of post one'},
    {title:'Post2',body:'This is body of post two'}
]
// definition part
let postSendm = (post,callback, callback1) => { //arrow function 
    setTimeout(() => {
        tans.push(post)
        console.log('hello')
    },2000)
    callback();
    callback1({title:'Post4',body:'This is body of post four'}); 
}

var callback1 = (postfour) => { 
    tans.push(postfour) 
} 
 
const getPost = () => { 
    setTimeout(() => {console.log(tans)}, 1000) //callback function 
}

const getPost=()=> {
    setTimeout(() => {console.log(tans)}, 1000) //callback function 
}

// execution part
postSend({title:'Post3',body:'This is body of post three'},getPost, callIn)
// getPost()//you ar enow only supposed to this post I mean the post numbered 1

//whenever we are in a class, the functions are called methods 
// 

// var third = array + secondArray
// console.log(third)

// var string = "xdxd"
// var stringstring = "blablabla"
// string = string + stringstring
// console.log(string)
