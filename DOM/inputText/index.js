const output = document.getElementById("output");
const input = document.getElementById("myInput");

function newElement() {
  const li = document.createElement("li");
  const inputValue = input.value;

  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("Oops...! Write something!");
  } else {
    output.appendChild(li);
  }
  input.value = "";
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    newElement();
  }
});



