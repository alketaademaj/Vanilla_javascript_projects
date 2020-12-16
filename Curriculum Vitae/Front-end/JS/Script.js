function scrollDown(path){
    var elem=document.getElementById(path);
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

function waiting(){
    return new Promise(async (res) => { 
        for(var x = 0; x<Alks.length; x++){
            for(var z = 0; z<=Alks[x].length; z++) {
                await timer(100)
                //console.log(Alks[x].slice(0,z))
                //console.log(changeText)
                changeText.innerText = Alks[x].slice(0,z)
                if(z==Alks[x].length) {
                document.getElementById("curser").setAttribute("class", "blinker")
                await timer(500)
                document.getElementById("curser").setAttribute("class", "")
                }
              // await setTimeout(function(x,z){ console.log(Alks[x].slice(0,z)) }, 3000, x, z);
            }
            for(var y = Alks[x].length; y>=0; y--) {
                await timer(100)
               // console.log(Alks[x].slice(0,y));
                changeText.innerText = Alks[x].slice(0,y)
        }
        if(x==Alks.length-1) {
            res()
        }
    }
    })
} 



