let startButton = document.querySelector('#start_button');
let pauseButton = document.querySelector('#pause_button');
let displayCount = document.querySelector('#count');
let count = 0;
let timer;

function startTime() {
    timer = setInterval(updateCount, 1000);
}

function pauseTime() {
    clearInterval(timer);
}

function updateCount() {
    count++;
    displayCount.innerText = count;
}

startButton.addEventListener('click', startTime);
pauseButton.addEventListener('click', pauseTime);