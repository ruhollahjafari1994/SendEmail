//variables 

const sendBtn=document.querySelector('#sendBtn'),
email = document.querySelector('#email'),
subject = document.querySelector('#subject'),
message = document.querySelector('#message'),
resetBtn =document.querySelector('#resetBtn'),
form =document.querySelector('#email-form');

//eventListener 
eventListener();
function eventListener(params) {
    //app initialization
    document.addEventListener('DOMContentLoaded',appInit)
    //validating fields 
    email.addEventListener('blur',validateField)
    subject.addEventListener('blur',validateField)
    message.addEventListener('blur',validateField)
    resetBtn.addEventListener('click',resetForm);
}

function appInit() {
    sendBtn.disabled=true;
}


//validating field of form
function validateField() {


    //validate Email Field
    validateLength(this);
    if (this.type==='email') {
     validateEmail(this);

    }
    let error=document.querySelectorAll('.error');
    if (email.value !=='' &&subject.value !=='' && message.value !=='' ) {
        if (error.length===0) {
    sendBtn.disabled=false;
        }
    }
}

//validate Length Of Fields
function validateLength(field) {
if (field.value.length > 0 ) {
    field.style.borderBottomColor='green';
    field.classList.remove('error');
}
else{
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
}
}
 //validate emails fields @
function validateEmail(field) {
 const emailText=field.value
    if (emailText.includes('@') ) {
        field.style.borderBottomColor  ='green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor  ='red';
        field.classList.add('error');
    }
}

//reset form with button
function resetForm() {
    form.reset();
}
//submit form and show gif
form.addEventListener('submit',submitForm)
//Sending Email And Submit Email
function submitForm(e) {
    e.preventDefault();
    
    //Show The spinner
    const spinner=document.getElementById('spinner');
    spinner.style.display='block';
    //make second gif 
    const sendEmailImg =document.createElement('img')
    sendEmailImg.src ='../img/mail.gif';
     //Show The Email Send Image
    setTimeout(function(){
        //hide first spinner 
        spinner.style.display='none';

        //append Image To the Html
        const loaders = document.querySelector('#loaders')
        loaders.appendChild(sendEmailImg)
        sendEmailImg.style.display='block';

        //reset And Remove
        setTimeout(() => {
            resetForm();
            sendEmailImg.remove();
        }, 5000);
    }, 3000);
}
//functions 