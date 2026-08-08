const timer = document.getElementById("timer");
const speedDisplay = document.getElementById("speed");
let elapsedTime = 0;
let speed = 1;
let isRunning = false;
let intervalId;

function updateTimer(elapsedTime){
    if (elapsedTime == 0) {
        timer.textContent = "00:00:00"
    } else {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

function update(){
    elapsedTime += 1000;
    updateTimer(elapsedTime);
}

function start(){
    if(!isRunning){
        intervalId = setInterval(update, 1000 / speed);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(intervalId);
        isRunning = false;
    }
}

function reset(){
    if(!isRunning){
        elapsedTime = 0;
        updateTimer(elapsedTime);
    }
}

function doubleSpeed(){
    if(!isRunning) {
        speed *= 2;
    } else {
        stop();
        speed *= 2;
        start();
    }
    speedDisplay.textContent = speed;
}

function halveSpeed(){
    if(!isRunning) {
        speed /= 2;
    } else {
        stop();
        speed /= 2;
        start();
    }
    speedDisplay.textContent = speed;
}