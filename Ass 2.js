const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]/;
const passwordRegex = /^.{4,8}/;

const form = document.getElementById('form');

form.addEventListener("submit", function ( e{
    e.preventDefault();````````````````````````````````````````
}))

const email = document.getElementById('email').value;
const password = document.getElementById('passwprd').value;
const error = document.getElementById("error");
error.innerText ="";

if (!emailRegex.test(email)) {
    error.style.color = "red"
    error.innerText = "Invalid email. Kindly enter a valid email address.";
    return;
}

if (password.lenght <4) {
    error.style.color = "red"
    error.innerText = "Password too short. Minimum of 4 character required.";
    return

}else
error.style.color = "red"
error.innerText = "Password is valid!";

if (password.lenght >8) {
    error.style.color = "red"
    error.innerText = "Password too long. Maximum of 8 characters required.";
    return

}else 
error.style.color = "green"
error.innerText = "Email and password are valid";
});

