// console.log("Hello world");
// var inputs = document.querySelectorAll("input");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
const forms = document.querySelectorAll("form");
const form = forms[0];
// let passwordMessage = document.getElementById("passwordmessage");

function runSubmit() {
    checkPassword();
    checkForm();
}

function checkPassword() {
    // passwordMessage.textContent = "Password entered: " + password.value + ". Confirmed password: " + confirmPassword.value;

    if (password.value !== confirmPassword.value) {
        password.setCustomValidity("Passwords don't match. Try again.");
        confirmPassword.setCustomValidity("Passwords don't match. Try again.");
    } else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }

    // console.log("First name validity:", firstName.validity.valid);
    // console.log("Last name validity:", lastName.validity.valid);
    // console.log("Email validity:", email.validity.valid);
    // console.log("Password 1 validity:", password.validity.valid);
    // console.log("Password 2 validity:", confirmPassword.validity.valid);
}

function checkForm() {
    Array.from(form.elements).forEach((input) => {
        if (input.tagName.toLowerCase() !== "button") {
            if (input.validity.valid) {
                input.classList.remove("error");
            } else {
                input.classList.add("error");
            }
        }
    });
}