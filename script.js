let startButton = document.querySelector('#start_button');
let pauseButton = document.querySelector('#pause_button');
let resumeButton = document.querySelector('#resume_button');
let stopButton = document.querySelector('#stop_button');
let displayCount = document.querySelector('#count');
let count = 0;
let timer;

function startTime() {
    timer = setInterval(updateCount, 1000);
}

function pauseTime() {
    clearInterval(timer);
}

function resumeTime() {
    startTime();
}

function stopTime() {
    clearInterval(timer);
    count = 0;
    displayCount.innerText = count;
}

function updateCount() {
    count++;
    displayCount.innerText = count;
}

startButton.addEventListener('click', startTime);
pauseButton.addEventListener('click', pauseTime);
resumeButton.addEventListener('click', resumeTime);
stopButton.addEventListener('click', stopTime);