const inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container')

function addTask() {

    if (inputBox.value === '') {
        alert('You must write something')
    }

    else {
        let li = document.createElement('li');
        listContainer.appendChild(li);
        li.innerText = inputBox.value;
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }

    inputBox.value='';
    saveData();
}

    listContainer.addEventListener('click', (e)=>{

        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveData();
        }
        else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
    })

const saveData = () =>{
    localStorage.setItem('data', listContainer.innerHTML);
}

const showData = () =>{
    listContainer.innerHTML =  localStorage.getItem('data');
}

showData();