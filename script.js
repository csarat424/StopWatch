let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }

    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startStop').innerText = 'Start';
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
