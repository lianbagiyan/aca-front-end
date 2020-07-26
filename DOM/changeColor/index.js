const quoteText = document.querySelector(".quote-text");
const inputTextColor = document.querySelector(".text-color-input");
const inputBgColor = document.querySelector(".bg-color-input");
const applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", () => {
  let hex = "#";
  let textColorValue = inputTextColor.value;
  let bgColorValue = inputBgColor.value;

  if (
    textColorValue[0] === hex &&
    textColorValue.length === 7 &&
    bgColorValue[0] === hex &&
    bgColorValue.length === 7
  ) {
    quoteText.style.color = inputTextColor.value;
    quoteText.style.backgroundColor = inputBgColor.value;
  } else {
    alert("Oops...! You need to write hexadecimal values.");
  }
});
