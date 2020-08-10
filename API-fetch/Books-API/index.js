import { doGet } from './fetch.helper.js';

let input = document.querySelector(".search-input");
let contentBody = document.querySelector(".content-body");
let pagination = document.querySelector(".page-count");

const state = {
  currentPage: 1,
  inputValue: "",
  booksPart: [],
};

async function getValue() {
  document.body.style.justifyContent = "start";
  contentBody.innerText = "Wait, please! Count to 5 :)";
  setTimeout(() => {
    contentBody.innerText = "Page is running ...";
  }, 3000)
    pagination.innerText = '';
  state.booksPart = [];

  let data = await doGet(state.inputValue, state.currentPage);
    state.numFound = await data.num_found;
  state.pageCounter = Math.ceil(data.num_found / 100);

  createEveryPage(state.pageCounter);

  data.docs.forEach(
    ({ title_suggest, author_name, first_publish_year, subject }) => {
      let container = {};
      container.title = title_suggest;
      container.authorName = author_name ? author_name[0] : "Oops! Empty value ...";
      container.year = first_publish_year;
      container.subjects = subject ? subject.slice(0, 5) : "Oops! Empty value ...";
      state.booksPart.push(container);
    }
  );

  state.booksPart.forEach((item) => {
    createBox(item);
  });
}


function createEveryPage(number) {
  contentBody.innerText = "";

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
  if (event.target.classList.contains("page-number")) {
    state.currentPage = event.target.text;
    getValue();
  }

});