const submitBtnForm = document.getElementById("submit-btn");
const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const form = document.getElementsByClassName("form-body");
const output = {
  firstName,
  lastName
};

submitBtnForm.addEventListener("click", () => {
  output[firstName] = firstName.value;
  output[lastName] = lastName.value;
  let json = JSON.stringify(output)
  alert(json);
});

console.log(output)
