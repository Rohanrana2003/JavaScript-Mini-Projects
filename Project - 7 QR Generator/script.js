
let input = document.querySelector('#input');
let img = document.querySelector('#qr');
let URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='


document.querySelector('#btn').addEventListener('click', ()=>{


    if(!input.value){
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 300);
        return;
    }

    img.src =  URL + input.value;
    img.style.display = 'block';
})