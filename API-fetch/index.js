let title = document.querySelector('.title-name');
let date = document.querySelector('.date-number');
let director = document.querySelector('.director-name');
let description = document.querySelector('.description-text');

fetch("https://ghibliapi.herokuapp.com/films")
    .then((r) => r.json())
    .then((r) => {
        console.log(r[0])
        title.innerText = r[0].title;
        date.innerText = r[0].release_date;
        director.innerText = r[0].director;
        description.innerText = r[0].description;
    })
    .then(console.log(title))