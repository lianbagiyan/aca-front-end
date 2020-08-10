//import { doGet } from './fetch.helper.js';

let input = document.querySelector(".search-input");
let search = document.querySelector(".search-icon");
let contentBody = document.querySelector(".content-body");

const baseUrl = `http://openlibrary.org/search.json?q=`;

async function doGet(value, currentPage) {
  console.log("value", value, "currentPage", currentPage);
  let response;

  if (currentPage) {
    response = await fetch(`${baseUrl}${value}`);
  } else {
    response = await fetch(`${baseUrl}${value}&page=${currentPage}`);
  }

  let json = await response.json();
  return json;
}

const state = {
  currentPage: 1,
  inputValue: "",
  booksPart: [],
};

async function getValue() {
  document.body.style.justifyContent = "start";
  contentBody.innerText = "Wait, please! Page is running ...";

  state.booksPart = [];

  let data = await doGet(state.inputValue, state.currentPage);

  state.pageCounter = Math.ceil(data.num_found / 100);
  console.log(state.pageCounter);

  createEveryPage(state.pageCounter);

  data.docs.forEach(
    ({ title_suggest, author_name, first_publish_year, subject }) => {
      let container = {};
      container.title = title_suggest;
      container.authorName = author_name ? author_name[0] : "undefined";
      container.year = first_publish_year;
      container.subjects = subject ? subject.slice(0, 5) : "undefined";
      state.booksPart.push(container);
      console.log("containers", state.booksPart);

      state.booksPart.forEach((item) => {
        console.log("item", item);
        createBox(item);
      });
    }
  );
}

function createEveryPage(number) {
  contentBody.innerText = "";
  let pagination = document.createElement("div");
  pagination.className = "page-count";

  for (let i = 1; i <= number; i++) {
    let paginationItem = document.createElement("a");
    paginationItem.className = "page-number";
    paginationItem.innerText = i;
    pagination.append(paginationItem);
  }

  contentBody.append(pagination);
}

function createBox(value) {
  let ul = document.createElement("ul");
  ul.className = "book-content";

  for (let elem of Object.values(value)) {
    let li = document.createElement("li");
    li.innerText = elem;
    li.className = "book-content-item";
    ul.append(li);
    contentBody.append(ul);
  }
  return ul;
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    state.inputValue = input.value;
    getValue();
    input.value = "";
  }
});

pagination.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("page-count")) {
    console.log("event.target.text", event.target.text);
    state.currentPage = event.target.text;
    console.log(state.currentPage);
  }

  contentBody.innerText = "";

  getValue();
});