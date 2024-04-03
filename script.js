console.log("Hello world");
var inputs = document.querySelectorAll("input");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let passwordMessage = document.getElementById("passwordmessage");
checkValidity();

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        if (!this.checkValidity()) {
            console.log(" Test");
            this.classList.add("error");
        } else {
            this.classList.remove("error");
        }
    });
});

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

}

function checkPassword() {
    passwordMessage.textContent = "Password entered: " + password.value + ". Confirmed password: " + confirmPassword.value;

    if (password.value !== confirmPassword.value) {
        console.log("Passwords don't match");
        password.setCustomValidity("Passwords don't match. Try again.");
        confirmPassword.setCustomValidity("Passwords don't match. Try again.");
    } else {
        console.log("Passwords match");
        password.setCustomValidity("");
    }

    checkValidity();
}

function checkValidity() {
    console.log("First name validity:", firstName.validity.valid);
    console.log("Last name validity:", lastName.validity.valid);
    console.log("Password 1 validity:", password.validity.valid);
    console.log("Password 2 validity:", confirmPassword.validity.valid);
}