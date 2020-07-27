function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const input = document.getElementById("myInput");
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Oops...! Write something!");
  } else {
    document.getElementById("input-body").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}

