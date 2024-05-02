let startButton = document.querySelector('#start_button');
let displayCount = document.querySelector('#count');
let count = 0;
let timer;

function start_time() {
    timer = setInterval(updateCount, 1000);
}

function updateCount() {
    count++;
    displayCount.innerText = count;
}

startButton.addEventListener('click', start_time);