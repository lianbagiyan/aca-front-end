const quoteText = document.querySelector(".quote-text");
const inputTextColor = document.querySelector(".text-color-input");
const inputBgColor = document.querySelector(".bg-color-input");
const applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", () => {
  let textColor = inputTextColor.value;
  let bgColor = inputBgColor.value;

  if (
    textColor.length === 6 &&
    !isNaN(Number("0x" + textColor)) &&
    bgColor.length === 6 &&
    !isNaN(Number("0x" + bgColor))
  ) {
    quoteText.style.color = "#" + inputTextColor.value;
    console.log(quoteText.style.color);
    quoteText.style.backgroundColor = "#" + inputBgColor.value;
  } else {
    alert("Oops...! You need to write hexadecimal values such as cdcd67...!");
  }
});
