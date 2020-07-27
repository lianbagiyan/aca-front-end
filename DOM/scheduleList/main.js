const listItems = document.querySelectorAll("li");

listItems.forEach((item, i) => {
  const changeStyles = (item, i) => {
    if (i === 0) {
      item.style.textDecoration = "line-through";
      item.style.backgroundColor = "#eadfdf";
      item.style.color = "#615858";
      item.style.fontSize = "18px";
    }
    if (listItems[i - 1].style.textDecoration && i > 0) {
      item.style.textDecoration = "line-through";
      item.style.backgroundColor = "#eadfdf";
      item.style.color = "#615858";
      item.style.fontSize = "18px";
    }
  };
  item.addEventListener("click", changeStyles.bind(null, item, i));
});

