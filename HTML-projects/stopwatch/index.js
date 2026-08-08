const timer = document.getElementById("timer")
let elapsedTime = 0;
let isRunning = false;
let intervalId;

function updateTimer(elapsedTime){
    if (elapsedTime == 0) {
        timer.textContent = "00:00:00:00"
    } else {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let ms = Math.floor(elapsedTime % 1000 / 10)

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        ms = String(ms).padStart(2, "0");

        timer.textContent = `${hours}:${minutes}:${seconds}:${ms}`
    }
}

function update(){
    elapsedTime += 10;
    updateTimer(elapsedTime);
}

function start(){
    if(!isRunning){
        intervalId = setInterval(update, 10);
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