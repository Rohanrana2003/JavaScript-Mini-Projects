

let hour = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

let s = 0;
let h = 0;
let m = 0;

let timer = null;

function handleReset() {
    clearInterval(timer);

    sec.innerText = '00';
    min.innerText = '00';
    hour.innerText = '00';
    s = 0;
    h = 0;
    m = 0;
}

function handleStop() {
    clearInterval(timer);
}

function handleStart() {

    s++;
    if (s > 59) {
        s = 0;
        m++;
        if (m > 59) {
            m = 0;
            h++;
        }
    }
    let s1 = s >= 10 ? s : '0' + s;
    let m1 = m >= 10 ? m : '0' + m;
    let h1 = h >= 10 ? h : '0' + h;


    sec.innerText = s1;
    min.innerText = m1;
    hour.innerText = h1;

}


function handleTime() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        handleStart();

    }, 1000);
}