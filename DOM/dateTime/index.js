let dateTimeText = document.getElementById("answer-text");
document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
  if (dateTimeText.style.display !== "block") {
    dateTimeText.style.display = "block";
    dateTimeText.innerText = Date();
  } else {
    dateTimeText.style.display = "none";
  }
}
