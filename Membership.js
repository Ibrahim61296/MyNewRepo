function validatePostalCode() {
    var pcodeInput = document.getElementById("code");
    var errorDiv = document.getElementById("postalError");
    try {
        if (/[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/.test(pcodeInput.value) === false) {
            throw "Invalid zip format";
            }
        pcodeInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        } 
    catch (msg) {
        errorDiv.style = "block";
        errorDiv.innerHTML = msg;
        pcodeInput.style.background = "rgb(255,233,233)";
    }
}

function validateAge() {
    var ageInput = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (ageInput.value < 18) {
            throw "Age must be at least 18 years old";
        }
        ageInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        ageInput.style.background = "rgb(255,233,233)";
    }
}

function validateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        emailInput.value = emailInput.value.toLowerCase();
}
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function validatePassword() {
    var pw1Input = document.getElementById("password");
    var pw2Input = document.getElementById("confirm");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (/.{6,}/.test(pw1Input.value) === false) {
            throw "Password must have at least 6 characters";
        } 
        else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        }
        else if (/[A-Z]/.test(pw1Input.value) === false) {
            throw "Password must have at least one uppercase letter";
        }
        else if (/\W/.test(pw1Input.value) === false) {
            throw "Password must have at least one special character";
        }
         else if (/\d/.test(pw1Input.value) === false) {
            throw "Password must have at least one number";
        }
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        }
    catch (msg) {
        errorDiv.style = "block";
        errorDiv.innerHTML = msg;
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

function setUpPages() {
   validateAge();
   validateEmail();
   validatePassword();
   validatePostalCode();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPages);
}


