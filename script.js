var email = document.forms["form"]["username"];
var password = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

email.addEventListener("textinput", email_verify);
password.addEventListener("textinput", password_verify);

function validated() {
  if (email.value.length < 8) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    password_error.style.display = "block";
    password.focus();
    return false;
  }
}
function email_verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}

function password_verify() {
  if (password.value.length >= 8) {
    password.style.border = "1px solid silver";
    password_error.style.display = "none";
    return true;
  }
}
