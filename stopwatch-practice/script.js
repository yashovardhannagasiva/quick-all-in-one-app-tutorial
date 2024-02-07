let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

function startStop() {
    
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopButton').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('startStopButton').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function lap() {
    const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
    const lapElement = document.createElement('div');
    lapElement.innerText = 'Lap ' + lapCount + ': ' + lapTime;
    document.getElementById('laps').appendChild(lapElement);
    lapCount++;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById('startStopButton').innerText = 'Start';
    document.getElementById('laps').innerHTML = ''; // Clear laps
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}<span id="milliseconds">.${formatMilliseconds(milliseconds)}</span>`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function formatMilliseconds(value) {
    return value < 100 ? (value < 10 ? `00${value}` : `0${value}`) : value;
}
