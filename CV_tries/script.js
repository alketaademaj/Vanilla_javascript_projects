var changeColor = document.querySelector('.switch') //.switch cause it is a class
var bodyColor = document.querySelector('body') //element
var changeMode = document.getElementById('mode')
var button = document.getElementById('answer')
var fibonacciLoop = document.getElementById('loops')
var displaying = document.getElementById('display')

changeColor.addEventListener("click", DarkLightMode);
button.addEventListener("click", function(){
    fibonacci(fibonacciLoop.value)
});

function DarkLightMode() {
    console.log(changeColor.childNodes)
    if(changeColor.childNodes[1].checked) {
        bodyColor.setAttribute('style', 'background-color: black; color: white')
        changeMode.innerHTML = "Dark mode is on";
        console.log(changeMode)
    }
    else {
        bodyColor.setAttribute('style', 'background-color: white; color: black')
        changeMode.innerHTML = "Light mode is on";
        console.log(changeMode)
    }
}

    function fibonacci(Parameter) {
        var array = [0,1]

        if(Parameter<2) { 
            displaying.innerHTML = [0];
        }
        else {
            for(var x = 1; Parameter > array.length; x++) {
                temp = array[x-1] + array[x]
                array.push(temp)
            }
        displaying.innerHTML = array;
    }
    }

    var z = 1;

    function factorial(argument) {
        for(var y = argument; y>0; y--) {
            z *= y;
        }
        console.log(z)
    }

    factorial(3)

//0,1,1,2,3,5,8,13,21,34

//array = 0 1
//creating temp that adds the first term and second term together -> making it the third one
//we are pushing it inside of our array -> which gives our array now 0 1 1 
//since the loop keeps going, it keeps pushing always the next term into the array 

