const timer = document.getElementById('clk');
const startB = document.getElementById('start');
const stopB = document.getElementById('stop');
const resetB = document.getElementById('reset');

let time = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

startB.onclick = start;

function start(){
    if(!running){
        startTime = Date.now() - elapsedTime;
        running = true;
        time = setInterval(update, 10);
    }
}

function stop(){
    if(running){
        clearInterval(time);
        running = false;
        elapsedTime = Date.now() - startTime;
    }
}

function reset(){
    clearInterval(time);
    startTime = 0;
    elapsedTime = 0;
    running = false;
    timer.textContent = "00:00:00:00";
}

function update(){
    elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    elapsedTime-=(hours*1000*60*60);
    hours = String(hours).padStart(2, "0");
    let mins = Math.floor(elapsedTime/(1000*60));
    elapsedTime-=(mins*1000*60);
    mins = String(mins).padStart(2, "0");
    let secs = Math.floor(elapsedTime/1000);
    elapsedTime-=(secs*1000);
    secs = String(secs).padStart(2, "0");
    let millisecs = Math.floor(elapsedTime/10);
    millisecs = String(millisecs).padStart(2, "0");

    timer.textContent = `${hours}:${mins}:${secs}:${millisecs}`;
}
