const form = document.getElementById("form");
const login = document.getElementById("login");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  let loginValue = login.value.trim();
  let emailValue = email.value.trim();
  let passValue = password.value.trim();

  if (loginValue === "") {
    setError(login, "Login cannot be blank.");
  } else if (loginValue.length < 5) {
    setError(login, "Login cannot be less than 5 characters.");
  } else {
    setSuccess(login);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank.");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid.");
  } else {
    setSuccess(email);
  }

  if (passValue === "") {
    setError(password, "Password cannot be blank.");
  } else if (passValue.length < 5) {
    setError(password, "Password cannot be less than 5 characters.");
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".err-text");

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;

  //add error class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}