var email = document.forms["form"]["username"];
var password = document.forms["form"]["password"];

var email_error = document.getElementsByClassName(".email_error");
var password_error = document.getElementsByClassName(".password_error");

function valided() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
}
