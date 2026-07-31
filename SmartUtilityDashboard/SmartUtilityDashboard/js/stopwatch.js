// =========================================
// STOPWATCH
// =========================================

let hours = 0;
let minutes = 0;
let seconds = 0;

let stopwatchInterval = null;
let isRunning = false;

// Display Time
function updateDisplay() {

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("time").innerHTML =
        `${h}:${m}:${s}`;
}

// Start Stopwatch
function startWatch() {

    if (isRunning)
        return;

    isRunning = true;

    stopwatchInterval = setInterval(() => {

        seconds++;

        if (seconds == 60) {

            seconds = 0;
            minutes++;

        }

        if (minutes == 60) {

            minutes = 0;
            hours++;

        }

        updateDisplay();

    }, 1000);

}

// Pause Stopwatch
function pauseWatch() {

    clearInterval(stopwatchInterval);

    isRunning = false;

}

// Reset Stopwatch
function resetWatch() {

    clearInterval(stopwatchInterval);

    isRunning = false;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

}

// Initial Display
updateDisplay();


// =========================================
// COUNTDOWN TIMER
// =========================================

let timerInterval;

function startTimer() {

    let min = parseInt(document.getElementById("minutes").value) || 0;
    let sec = parseInt(document.getElementById("seconds").value) || 0;

    let total = min * 60 + sec;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        if (total <= 0) {

            clearInterval(timerInterval);

            alert("Time's Up!");

            return;

        }

        total--;

        let m = Math.floor(total / 60);
        let s = total % 60;

        document.getElementById("timerDisplay").innerHTML =
            `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    },1000);

}

function stopTimer() {

    clearInterval(timerInterval);

}

function resetTimer() {

    clearInterval(timerInterval);

    document.getElementById("minutes").value = "";

    document.getElementById("seconds").value = "";

    document.getElementById("timerDisplay").innerHTML =
        "00:00";

}