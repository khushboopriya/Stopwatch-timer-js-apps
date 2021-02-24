const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

const h = document.querySelector('#hour');
const m = document.querySelector('#minute');
const s = document.querySelector('#second');

let startTimer;

function timer() {
    if (h.value === '0' && m.value === '0' && s.value === '0') {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value > '0') {
        s.value -= 1;
    } else if (m.value > '0' && s.value === '0') {
        m.value -= 1;
        s.value = 60;
    } else if (h.value > 0 && m.value === '0'){
        h.value -= 1;
        m.value = 60;
    }
}

function stopTimer() {
    clearInterval(startTimer);
}
start.addEventListener('click', () => {
    startTimer = setInterval(timer, 1000);
});

reset.addEventListener('click', () => {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
});