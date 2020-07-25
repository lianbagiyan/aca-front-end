/**
 * Images clicks
 */

let photos = new Array(
    "./assets/emoji/lian-hi.PNG",
    "./assets/emoji/lian-cool.PNG",
    "./assets/emoji/lian-hmm.PNG",
    "./assets/emoji/lian-query.PNG",
    "./assets/emoji/lian-smile.PNG",
    "./assets/emoji/lian-yes.PNG"
);

let idName = new Array(
    "block-2"
)
  
let i = 0;
let j = photos.length;
let image = document.getElementById("image");
  
function arrowForward() {
    if (i >= 0) {
      document.getElementById("arrow-left").style.overflow = "visible";
    }
  
    if (i === j - 2) {
      document.getElementById("arrow-right").style.overflow = "hidden";
    }
  
    if (i != j - 1) {
      i++;
    }
    image.src = photos[i];
}
  
function arrowBack() {
    if (i === 1) {
      document.getElementById("arrow-left").style.overflow = "hidden";
    }
  
    if (i === j - 1) {
      document.getElementById("arrow-right").style.overflow = "visible";
    }
    if (i != 0) {
      i--;
    }
    image.src = photos[i];
}
  
/**
    * Button click for DateTime
*/
  
  let dateTimeText = document.getElementById("answer-text");
  document.getElementById("btn").addEventListener("click", displayDate);
  
  function displayDate() {
      if(dateTimeText.style.display !== "block"){
          dateTimeText.style.display = "block"
          dateTimeText.innerText = Date();
      }else{
          dateTimeText.style.display = "none"
      }
  }
  
/**
   * Form --- input
*/
  
const inputText = document.querySelector(".input");
const inputBody = document.querySelector(".input-body");
const submitBtn = document.querySelector(".button-form");
  
const state = {
    inputValue: "",
    todos: [],
};
  
inputText.addEventListener("input", (event) => {
    state.inputValue = event.target.value;
});
  
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    state.todos.push(state.inputValue);
    state.inputValue = "";
    inputText.value = "";
  
    render(state);
});
  
const render = (state) => {
    inputText.value = state.inputValue;
  
    const list = document.createElement("ol");
  
    state.todos.forEach((value) => {
      const listItem = document.createElement("li");
      listItem.innerText = value;
      list.append(listItem);
    });
  
    inputBody.innerText = "";
    inputBody.append(list);
};
  

/**
   * Schedule information list
*/

const listItem = document.querySelectorAll(".item");
const listText = document.querySelector(".item-text");

listText.addEventListener('click', () => {
    listText.style.textDecoration = "underline";
})