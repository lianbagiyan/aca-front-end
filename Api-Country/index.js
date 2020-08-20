const form = document.getElementById("form");
const login = document.getElementById("login");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(checkInputs()){
    window.location.href = 'country/country.html';
  };
});

function checkInputs() {
  // get the values from the inputs
  let loginValue = login.value.trim();
  let emailValue = email.value.trim();
  let passValue = password.value.trim();
  let value;

  if (loginValue === "") {
    setError(login, "Login cannot be blank.");
    value = false;
  } else if (loginValue.length < 5) {
    setError(login, "Login cannot be less than 5 characters.");
    value = false;
  } else {
    setSuccess(login);
    value = true;
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank.");
    value = false;
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid.");
    value = false;
  } else {
    setSuccess(email);
    value = true;
  }

  if (passValue === "") {
    setError(password, "Password cannot be blank.");
    value = false;
  } else if (passValue.length < 5) {
    setError(password, "Password cannot be less than 5 characters.");
    value = false;
  } else {
    setSuccess(password);
    value = true;
  }

  return value;
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

