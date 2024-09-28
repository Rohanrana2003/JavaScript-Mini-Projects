const success = document.getElementById('success');
const error = document.getElementById('error');
const invalid = document.getElementById('invalid');

const msg = document.querySelector('.msg');


function handleSuccess(){

    let div = document.createElement('div');
    div.innerText = 'Succesfully Submitted';
    div.classList.add('success');
    msg.appendChild(div);

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);
}


function handleError(){

    let div = document.createElement('div');
    div.innerText = 'Please fix the error!';
    div.classList.add('error');
    msg.appendChild(div);

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);
}


function handleInvalid(){

    let div = document.createElement('div');
    div.innerText = 'Invalid input, check again';
    div.classList.add('invalid');
    msg.appendChild(div);

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);
}




success.addEventListener('click', ()=>{
    handleSuccess();
})
error.addEventListener('click', ()=>{
    handleError();
})
invalid.addEventListener('click', ()=>{
    handleInvalid();
})