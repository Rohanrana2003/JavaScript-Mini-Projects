const quote = document.getElementById('quote');
const author = document.getElementById('author');


const getData = async() =>{

    const data = await fetch('https://api.quotable.io/random');
    const response = await data.json();

    quote.innerText = response.content;
    author.innerText = response.author
}

document.querySelector('#new-quote').addEventListener('click', ()=>{
    getData();
})

document.querySelector('#share').addEventListener('click', ()=>{
    window.open('https://x.com/intent/post?text=' + quote.innerText + '--by ' + author.innerText);
})

getData();