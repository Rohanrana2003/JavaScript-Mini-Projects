 
 let name = document.getElementById('name');
 let phone = document.getElementById('phone');
 let email = document.getElementById('email');
 let textarea = document.getElementById('textarea');
 let button = document.getElementById('button');

 let nameError = document.getElementById('nameError');
 let phoneError = document.getElementById('phoneError');
 let emailError = document.getElementById('emailError');
 let textareaError = document.getElementById('textareaError');
 let buttonError = document.getElementById('buttonError');

 const handleName = () =>{

    let validName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name.value);

    if(!validName){
        nameError.innerHTML = 'Enter Full Name';
    }
    else{
        nameError.innerHTML = '✅';
    }
 }

 const handlePhone = () =>{

    let validatePhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone.value);

    if(!validatePhone){
        phoneError.innerHTML = 'PhNo.should contain 10 digits only';
    }
    else{
        phoneError.innerHTML = '✅';
    }

 }

 const handleEmail = () =>{
    
    let validateEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email.value);
    if(!validateEmail){
        emailError.innerHTML = 'Enter a valid email'
    }
    else{
        emailError.innerHTML = '✅';
    }
 }

 const handleTextarea = () =>{

    let validTextarea = /^\w+(\s+\w+){9,}$/.test(textarea.value);
    if(!validTextarea){
        textareaError.innerHTML = 'Minimum 10 words is required';
    }
    else{
        textareaError.innerHTML = '✅';
    }
    
 }

 const handleForm = () =>{
    
    if(!name.value){
        nameError.innerHTML = 'Name is required';
    }
    if(!phone.value){
        phoneError.innerHTML = 'Phone No. is required';
    }
    if(!email.value){
        emailError.innerHTML = 'Email is required';
    }
 }


 button.addEventListener('click', (e)=>{
    e.preventDefault();
    handleForm();
 })

