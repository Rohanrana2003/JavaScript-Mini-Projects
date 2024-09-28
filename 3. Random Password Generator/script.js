
let input = document.querySelector('#password');
let btn = document.querySelector('.btn');
let copyBtn = document.querySelector('#copy');

const upperAplha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789'
const specialCh = '!@#$%^&*.'
const allChar = upperAplha + lowerAlpha + numbers + specialCh;


const randomValue = (arr) => {
    const x = Math.floor(Math.random() * arr.length);
    return arr[x];
}

const generatePassword = () => {

    let password = randomValue(upperAplha);
    while(password.length < 12){
        password += randomValue(allChar);
    }
    input.value = password
}

btn.addEventListener('click', () => {
    generatePassword();
})

copyBtn.addEventListener('click', ()=>{
    input.select();
    document.execCommand('copy');
})