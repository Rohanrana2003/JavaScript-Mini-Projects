const btn = document.querySelector('button');
const notes = document.querySelector('.notes');

function getData(){
    notes.innerHTML  = localStorage.getItem('notes');
}
getData();

function storeData(){
    localStorage.setItem('notes', notes.innerHTML);
}

btn.addEventListener('click', () => {

    notes.innerHTML += `<div class="note">
                            <textarea id="text" placeholder="Enter Notes Here..."> </textarea>
                            <img src="images/delete.png" alt="dlt_logo" id="delete"/>    
                        </div>`
    storeData();
})

notes.addEventListener('click', (e) => {

    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        storeData();
    }
    else if (e.target.tagName === 'TEXTAREA') {

        document.querySelectorAll('textarea').forEach(nt => {

            nt.onkeyup = function () {
                storeData();
            }
        })
    }
})