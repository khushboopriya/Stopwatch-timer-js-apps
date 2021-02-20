function startTime() {
    pauseTime();
    intervalId = setInterval(timer, 10);

}

function pauseTime() {
    clearInterval(intervalId);

}

function resetTime(){
    hour=0;
    minute =0;
    second=0;
    millisecond=0;

    document.querySelector('#hour').innerText='00';
    document.querySelector('#minute').innerText='00';
    document.querySelector('#second').innerText='00';
    document.querySelector('#millisecond').innerText='000';

}

function timer() {
    if((millisecond+=10) === 1000) {
        millisecond=0;
        second++;
    }

    if (second === 60){
        second =0;
        minute++;
    }
    if(minute === 60){
        minute=0;
        hour++;
    }

    document.querySelector('#hour').innerText=hour;
    document.querySelector('#minute').innerText=minute;
    document.querySelector('#second').innerText=second;
    document.querySelector('#millisecond').innerText=millisecond;


}

let hour =0;
let minute =0;
let second = 0;
let millisecond =0;

let intervalId;

document.querySelector('#start').addEventListener('click', startTime);
document.querySelector('#pause').addEventListener('click', pauseTime);
document.querySelector('#reset').addEventListener('click', resetTime);