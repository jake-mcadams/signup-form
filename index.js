const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const password = document.getElementById('password');
const claim = document.getElementById('claim');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const theForm = document.getElementById('Form');
// let a = document.forms["main-form"]["first-p"].value;
// let b = document.forms["main-form"]["last-p"].value;
// let c = document.forms["main-form"]["email-p"].value;
// let d = document.forms["main-form"]["password-p"].value;


firstName.addEventListener('submit', (event)=>{
    console.log(event.target.value);
    let z = event.target.value;
    if(z == ""){
        console.log("didnt work")
        firstNameError.style.display="initial";
        return false;
    }
})



// test.addEventListener('onchange', (event)=>{
//     console.log(event.target)
// })

// function validateForm() {
//     let a = document.forms["main-form"]["first-p"].value;
//     let b = document.forms["main-form"]["last-p"].value;
//     let c = document.forms["main-form"]["email-p"].value;
//     let d = document.forms["main-form"]["password-p"].value;
//     (a === "")? firstNameError.style.display="initial": console.log(a)
// }

theForm.addEventListener('submit', function(event){
    event.preventDefault();
})

firstName.addEventListener('input',()=>{
    firstNameError.style.display="none";
})

lastName.addEventListener('input',()=>{
    lastNameError.style.display="none";
})

emailAddress.addEventListener('input',()=>{
    emailError.style.display="none";
})

password.addEventListener('input',()=>{
    passwordError.style.display="none";
})

function validateForm(){
    firstNameInput();
    lastNameInput();
    emailInput();
    passwordInput()
}


function firstNameInput(){
    let a = document.forms["main-form"]["first-p"].value;
    if(a === ""){
        firstNameError.style.display="initial";
        return false;
    }else{
        console.log("didnt work")
    }
}

function lastNameInput(){
    let b = document.forms["main-form"]["last-p"].value;
    if(b === ""){
        lastNameError.style.display="initial";
        return false;
    }else{
        console.log("didnt work")
    }
}


function emailInput(){
    let c = document.forms["main-form"]["email-p"].value;
    if(c === ""){
        emailError.style.display="initial";
        return false;
    }else{
        console.log("didnt work")
    }
}


function passwordInput(){
    let d = document.forms["main-form"]["password-p"].value;
    if(d === ""){
        passwordError.style.display="initial";
        return false;
    }else{
        console.log("didnt work")
    }
}


// if(a == ""){
//     console.log('forst name must be filled out');
//     firstNameError.style.display="initial";
//     return false;
// }
// if(b == ""){
//     lastNameError.style.display="initial";
//     return false;
// }
// if(c == ""){
//     emailError.style.display="initial";
//     return false;
// }
// if(d == ""){
//     passwordError.style.display="initial";
//     return false;
// }