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
