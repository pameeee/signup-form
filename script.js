// console.log("Hello world");
// var inputs = document.querySelectorAll("input");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
// let passwordMessage = document.getElementById("passwordmessage");

// inputs.forEach(function(input) {
//     input.addEventListener("input", function() {
//         if (!this.checkValidity()) {
//             console.log(" Test");
//             this.classList.add("error");
//         } else {
//             this.classList.remove("error");
//         }
//     });
// });

// inputs.forEach(function(input) {
//     input.addEventListener("focus", function() {
//         this.classList.remove("error");
//     });
//     input.addEventListener("blur", function() {
//         this.classList.add("error");
//     });
// });

function checkForm() {
    checkPassword();
    // console.log("Hello world");
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

    console.log("First name validity:", firstName.validity.valid);
    console.log("Last name validity:", lastName.validity.valid);
    console.log("Email validity:", email.validity.valid);
    console.log("Password 1 validity:", password.validity.valid);
    console.log("Password 2 validity:", confirmPassword.validity.valid);
}

// function checkValidity() {
//     console.log("First name validity:", firstName.validity.valid);
//     console.log("Last name validity:", lastName.validity.valid);
//     console.log("Password 1 validity:", password.validity.valid);
//     console.log("Password 2 validity:", confirmPassword.validity.valid);
// }