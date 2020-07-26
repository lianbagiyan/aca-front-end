const submitBtnForm = document.getElementById("submit-btn");
const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const outputText = {
  fName: firstName.value,
  lName: lastName.value,
};
console.log(firstName.value);
submitBtnForm.addEventListener("click", () => {
  alert(JSON.stringify(outputText));
});