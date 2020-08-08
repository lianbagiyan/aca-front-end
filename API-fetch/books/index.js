let input = document.querySelector('.search-input');
let search = document.querySelector('.search-icon');
let contentBody = document.querySelector('.content-body');

let baseUrl = `http://openlibrary.org/search.json?q=`;

let state = {
    currentPage: 1,
    inputValue: "",
    urlPage: "",
    booksPart: [],
};

function getValue(){
    document.body.style.justifyContent = 'start';
    let inputValue = input.value;
    console.log(inputValue);

    let url = `${baseUrl}${inputValue}`;

    fetch(url)
    .then(r => r.json())
    .then((r) => {
        console.log(r)

        let pageCounter = Math.ceil(r.num_found/100); 
        if(pageCounter > 12) {
            getPageContainer();
        }

        createEveryPage(pageCounter);

        r.docs.forEach(({title_suggest, author_name, first_publish_year, subject}) => {
            let title = title_suggest;
            let authorName = author_name ? author_name[0] : "undefined";
            let year = first_publish_year;
            let subjects = subject ? subject.slice(0, 5) : "undefined";

            let newList = createBox([title, authorName, year, subjects]);
            contentBody.append(newList);
        });
    })
}

function getPageContainer() {

}

function createEveryPage(number){ 
    contentBody.innerText = '';
    let pageNumbersList = document.createElement('div');
    pageNumbersList.className = 'page-count';

    for(let i=1; i<=number; i++){
        let pageNumbersItem = document.createElement('a');
        pageNumbersItem.className = "page-number";
        pageNumbersItem.innerText = i;
        pageNumbersList.append(pageNumbersItem);
    }

    contentBody.append(pageNumbersList);
}

function createBox(value){
    let ul = document.createElement('ul');
    ul.className = "book-content";
    
    value.forEach((value) => {
        let li = document.createElement("li");
        li.innerText = value;
        li.className = "book-content-item";
        ul.append(li);
    })
    return ul;
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      getValue();
    }
});

