const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{4,8}$/;

document.getElementById('form').addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const error = document.getElementById("error");
    error.innerText = "";
    
    if (!emailRegex.test(email)) {
        error.style.color = "red";
        error.innerText = "Invalid email. Kindly enter a valid email address.";
        return;

    }

    if (!passwordRegex.test(password)) {
        error.style.color = "red";
        error.innerText = "Invalid password, it must be 4–8 characters long";
        return;
    }

    error.style.color = "green";
    error.innerText = "Email and password are valid!";});