function scrollDown(path) {
    var elem = document.getElementById(path);
    elem.scrollIntoView();
}

var Alks = ["n aspiring front-end developer", " football player", " professional ice-cream eater", " BIT-graduate"]
var changeText = document.getElementById("changeText")

const timer = ms => new Promise(res => setTimeout(res, ms))

async function TheLooping() {
    await waiting()
    TheLooping()
}
TheLooping()

function waiting() {
    return new Promise(async (res) => {
        for (var x = 0; x < Alks.length; x++) {
            for (var z = 0; z <= Alks[x].length; z++) {
                await timer(100)
                //console.log(Alks[x].slice(0,z))
                //console.log(changeText)
                changeText.innerText = Alks[x].slice(0, z)
                if (z == Alks[x].length) {
                    document.getElementById("curser").setAttribute("class", "blinker")
                    await timer(500)
                    document.getElementById("curser").setAttribute("class", "")
                }
                // await setTimeout(function(x,z){ console.log(Alks[x].slice(0,z)) }, 3000, x, z);
            }
            for (var y = Alks[x].length; y >= 0; y--) {
                await timer(100)
                // console.log(Alks[x].slice(0,y));
                changeText.innerText = Alks[x].slice(0, y)
            }
            if (x == Alks.length - 1) {
                res()
            }
        }
    })
}
//showing the navi even in the smaller screen 
var naviButton = document.querySelector(".small-navi");
var BiggerNav = document.getElementById('nav');
naviButton.addEventListener("click", displayNaviButton);
var showButton = true;

function displayNaviButton() {
    if (showButton === true) {
        BiggerNav.style.left = "0";
        naviButton.style.left = "250px"
        showButton = false;
    }
    else {
        BiggerNav.style.left = "-250px";
        naviButton.style.left = "0";
        showButton = true;
    }
}

    window.addEventListener('scroll', () => {
        
    var fadingEffect = document.getElementById('about-me');
    if(document.documentElement.scrollTop + window.innerHeight >= fadingEffect.offsetTop){
        fadingEffect.style.opacity = "1";
        fadingEffect.style.margin = "10px";
    }
    })
// var setTheFade = true;
//     if(setTheFade === true) {
//         fadingEffect.style.top = "100"
//         setTheFade = false;
//     }
//     else  {
//         fadingEffect.style.top = "-100"
//         fadingEffect.style.opacity = "0";
//         setTheFade = true;
//     }

//making the skills bar go up
//get the class/element
var percentage_raise = document.querySelectorAll('.percentage');
var progress_bar = document.querySelectorAll('.progress-bar');
var icon_text = document.querySelectorAll('.about-icon-text')

//console.log(progress_bar[0].style.width) -> getting the bar 

//console.log(percentage_raise)
var counter = [0,0,0,0];
var counter1 = [0,0,0,0];

window.addEventListener('scroll', () => {
        //console.log(percentage_raise[0].offsetTop);
        //console.log(document.documentElement.scrollTop + window.innerHeight)
        //console.log(percentage_raise[0].innerHTML)
        //console.log("is it working?")
        //for (var y = 0; y<percentage_raise.length; y++) {

        percentage_raise.forEach((element, index) => {
            if (counter[index] < 1) {
            if (document.documentElement.scrollTop + window.innerHeight >= element.offsetTop) {
                counter[index]++;

                var precentage = 0;
                //deleting the % so we can make it into an integer
                var test = element.innerHTML.replace('%', '');
                var test1 = parseInt(test);

                setInterval(() => {
                    element.innerHTML = precentage + "%";
                    progress_bar[index].style.width = precentage + "%";
                    if (precentage < test1) {
                        precentage++;
                    }
                }, 3500 / test1)
            }
        }
    }); 

    var icon_text = document.querySelectorAll('.about-icon-text')

    //var x = document.getElementsByTagName("H1")[0].getAttribute("class");

   // console.log(typeof icon_text[0].children[0].getAttribute("data-value"))

    icon_text.forEach((element, index) => { // element = element of the array (it picks one element of the array), index = index of the element
       // console.log(counter1[index])
        //console.log(element)
        //console.log(index)
        if (counter1[index] < 1) {
            if(document.documentElement.scrollTop + window.innerHeight >= icon_text[index].offsetTop) { // or element.offsetTop

                counter1[index]++;

                var about_info = 0;
                setInterval(() => {
                    if(about_info <= parseInt(icon_text[index].children[0].getAttribute("data-value"))) {
                        if (index === 3 ) {
                            element.children[0].innerHTML = about_info + "?";
                        }
                    else {
                     element.children[0].innerHTML = about_info;
                    }
                    about_info++; 
                    } 
                }, 3500 / parseInt(icon_text[index].children[0].getAttribute("data-value")))
            }
        }
    }) 
})
//console.log(percentage_raise[0].innerHTML.replace('%', ''))
//console.log(typeof(test1)) -> checking the type of variable
//console.log(progress_bar[0].style.width = percentage)

//grabbing the element 
var color_change = document.querySelectorAll('.experience-card');

window.onload = () => {
    color_change.forEach((elem) => //it excepts a function as an argument
    {
        var random = Math.floor(Math.random() * colors.length); //picks a random number between 0 and 9
        // console.log(elem)
         elem.style.backgroundColor = colors[random] 
    });
}
//window.onload = () => {
   // for(var x = 0; x<4; x++){
      //  myFunction(x)
  //  }
//  };

//console.log(color_change[0])

//the colors I want to change to 
var colors = [
    "#FFC0CB",
    "#90EE90",
    "#FFD700",
    "#FF1493",
    "#8FBC8F",
    "#FF7F50",
    "#DC143C",
    "#8A2BE2",
    "#7FFF00",
    "#00FFFF"
]






