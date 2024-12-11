let active = 0
let quiter = 0
let kittycatloc = -275
var kittycat = document.getElementById('kittycat')
var grunt = new Audio('https://cdn.pixabay.com/download/audio/2022/03/24/audio_dba7a37bfe.mp3'); //please save...
kittycat.style.top = kittycatloc.toString()+'px'
kittycat.addEventListener("mouseover", (event) => {
uncatTime()
});
async function uncatTime(){ //update code to check if its already falling!
    quiter = 1
    active = 1
    grunt.play();
    while(true){
        if (kittycatloc <= -275){
            active = 0
            quiter = 0
            break
        }
        kittycatloc -= 10
        kittycat.style.top = kittycatloc.toString() + 'px'
        await new Promise(r => setTimeout(r, 1));
    }
}
async function catTime(){
    if (active != 1 || quiter == 1){
        active = 1
        while(true){
                if (kittycatloc >= 0){
                    active = 0
                    quiter = 0
                    break
                }
                kittycatloc += 2
                kittycat.style.top = kittycatloc.toString() + 'px'
                await new Promise(r => setTimeout(r, 1));
                if (quiter == 1){
                    break
                }
        }
    }
}
