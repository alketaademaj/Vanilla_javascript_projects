var changeColor = document.querySelector('.switch') //.switch cause it is a class
var bodyColor = document.querySelector('body') //element
var changeMode = document.getElementById('mode')

changeColor.addEventListener("click", DarkLightMode);

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

function fibonacci(a) { 
    var array = [0,1]
    if(a>=1) {
        for(var x = 0; a>array.length; x++) {
            var temp = array[x] + array[x+1]
            array.push(temp)
            }
        }  else {
            array[0]
    } 
}

fibonacci(10)

//0,1,1,2,3,5,8,13,21,34

//array = 0 1
//creating temp that adds the first term and second term together -> making it the third one
//we are pushing it inside of our array -> which gives our array now 0 1 1 
//since the loop keeps going, it keeps pushing always the next term into the array 

