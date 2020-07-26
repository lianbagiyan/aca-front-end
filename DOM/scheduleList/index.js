const listItemElem = document.querySelectorAll(".item");
const listText = document.querySelector(".item-text");

listItemElem.addEventListener("click", () => {
  console.log(listItem, listText);
  listText.style.textDecoration = "underline";
  listItemElem.style.backgroundColor = "#eadfdf";
});
