function showBar() {
    const sideBar = document.querySelector('.sidemenu');
    sideBar.style.display = 'block';
}

function hidesidebar() {
    const sideBar = document.querySelector('.sidemenu');
    sideBar.style.display = 'none';
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



/* login */

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');


form.addEventListener('login', e => {
    e.preventDefault();
    validateInputs();
});

var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

var validateInputs = () => {

    var usernameValue = username.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else {
        setSuccess(password);
    }

};


/* Theme mode */

function colorBlack(){
    document.body.style.background="black"

    document.querySelectorall("login").forEach(e=>e.style.color="steelblue")
}

function colorSteelblue(){
    document.body.style.background="steelblue"

    document.querySelectorall("").forEach(e=>e.style.color="black")
}




