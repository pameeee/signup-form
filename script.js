console.log("Hello world");
let firstName = document.getElementById("firstName");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let passwordMessage = document.getElementById("passwordmessage");

function checkForm() {
    checkPassword();
}

function checkPassword() {
    passwordMessage.textContent = "Password entered: " + password.value + ". Confirmed password: " + confirmPassword.value;

    if (password.value !== confirmPassword.value) {
        console.log("Passwords don't match");
        password.setCustomValidity("Passwords don't match.");
    } else {
        console.log("Passwords match");
    }

    checkValidity();
}

function checkValidity() {
    console.log("First name validity:", firstName.validity.valid);
    console.log("Password 1 validity:", password.validity.valid);
    console.log("Password 2 validity:", confirmPassword.validity.valid);
}