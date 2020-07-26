/**
 * Images clicks
 */

let photos = new Array(
    "./assets/emoji/lian-hi.PNG",
    "./assets/emoji/lian-cool.PNG",
    "./assets/emoji/lian-hmm.PNG",
    "./assets/emoji/lian-query.PNG",
    "./assets/emoji/lian-smile.PNG",
    "./assets/emoji/lian-yes.PNG",
    "./assets/emoji/lian-happy-face.PNG"
);

let idNames = new Array(
    "block-1",
    "block-2",
    "block-3",
    "block-4",
    "block-5",
    "block-6",
    "block-7"
);
  
let i = 0;
let j = photos.length;
let last = idNames.length;
const image = document.getElementById("image");
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
let contentBlock = document.querySelector("#block-1");
let showBlock = document.getElementById(`${idNames[last-1]}`);

rightArrow.addEventListener('click', () => {
    
    let nextBlock = document.getElementById(`${idNames[i+1]}`);

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
    contentBlock.style.display = 'none';
    nextBlock.style.display = 'flex';
    contentBlock = nextBlock;
})

leftArrow.addEventListener('click', () => {
    let prevBlock = document.getElementById(`${idNames[i-1]}`);

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
    
    showBlock.style.display = 'none';
    prevBlock.style.display = 'flex';
    showBlock = prevBlock;
})
  
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
   * Sign-in form
*/
const submitBtnForm = document.getElementById("submit-btn");
const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const outputText = {
    fName: firstName.value,
    lName: lastName.value
};
console.log(firstName.value)
submitBtnForm.addEventListener('click', () => {
    alert(JSON.stringify(outputText));
})

/**
   * Schedule information list
*/

const listItemElem = document.querySelectorAll(".item");
const listText = document.querySelector(".item-text");

listItemElem.addEventListener('click', () => {
    console.log(listItem, listText)
    listText.style.textDecoration = "underline";
    listItemElem.style.backgroundColor = "#eadfdf";
    
})

/**
   * Slider
*/

document.getElementById("slider-left").onclick = sliderLeft;
autoSlider();
let left = 0;
var timer;

function sliderLeft() {
    const sliderBlock = document.getElementById("slider-block");
    left-=100;
    if(left < -300) {
        left = 0;
        clearTimeout(timer);
    }
    sliderBlock.style.left = left+"px";
    autoSlider();
}

function autoSlider () {
    timer = setTimeout(sliderLeft, 2000);
}

/**
   * Text color
*/

const quoteText = document.querySelector(".quote-text")
const inputTextColor = document.querySelector(".text-color-input");
const inputBgColor = document.querySelector(".bg-color-input");
const applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener('click', () => {
    let hex = '#';
    let textColorValue = inputTextColor.value;
    let bgColorValue = inputBgColor.value;

    if(textColorValue[0] === hex && textColorValue.length === 7 && bgColorValue[0] === hex && bgColorValue.length === 7){
        quoteText.style.color = inputTextColor.value;
        quoteText.style.backgroundColor = inputBgColor.value;
    } else{
        alert("Oops...! You need to write hexadecimal values.")
    }
})
