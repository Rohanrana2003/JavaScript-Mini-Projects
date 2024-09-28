
const btn = document.querySelector('#calculate-button');
const input = document.querySelector('#age-input')
const years = document.getElementById('years');
const months = document.getElementById('months')
const days = document.getElementById('days')

btn.addEventListener('click', () => {

    let y = 0;
    let m = 0;
    let d = 0;

    if (!input.value) {
        alert('Please select a Date');
        return;
    }

    let date = new Date();
    
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDate = date.getDate();
                

    let dateArray = input.value.split('-');

    let birthYear = Number(dateArray[0]);
    let birthMonth = Number(dateArray[1]);
    let birthDate = Number(dateArray[2]);

    if (currentDate < birthDate) {
        d = 30 + currentDate - birthDate;
        m = -1;
    } else {
        d = currentDate - birthDate;
    }

    if (currentMonth < birthMonth) {
        m = m + 12 + currentMonth - birthMonth;
        y--;
    } else {
        m = m + currentMonth - birthMonth;
    }

    y = y + currentYear - birthYear;


    years.innerText = y;
    months.innerText = m;
    days.innerText = d;



})