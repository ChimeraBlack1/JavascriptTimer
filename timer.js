
var h1 = document.getElementsByTagName('h1')[0],
start = document.getElementById('start'),
read = document.getElementById('read'),
stop = document.getElementById('stop'),
clear = document.getElementById('clear'),
seconds = 0, minutes = 0, hours = 0,
t;

function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();
}
function timer() {
t = setTimeout(add, 1000);
}

function readTime()
{
totalSeconds = (minutes * 60) + seconds;
return totalSeconds;
}

//timer();


/* Start button */
start.onclick = timer;


/* Stop button */
stop.onclick = function() {
clearTimeout(t);
totalSeconds = (minutes * 60) + seconds;
$('#call_log_durationOfCall').val(totalSeconds);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}