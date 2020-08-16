// import { createCoutryTableRow } from './dom.helper.js';

// const state = document.querySelector('.state');
// const table = document.querySelector('.country-table');
// const tableBody = table.querySelector('tbody');

// fetch('https://restcountries.eu/rest/v2/all')
//     .then((r) => r.json())
//     .then( (r) => {
//         r.forEach(({ name, flag }) => {
//             const row = createCoutryTableRow({name, imgSrc: flag});
//             tableBody.append(row);
//         })
//     })
//     .catch( (err) => {
//         console.warn(err);
//         state.innerText = err.message;
//     })

const countriesBody = document.querySelector('.countries-box');

fetch('https://restcountries.eu/rest/v2/all')
    .then((r) => r.json())
    .then( (r) => {
        r.forEach(({name, nativeName, capital, area, population, region}) => {
            let card = createCountryCard([name, nativeName, capital, area, population, region]);
            countriesBody.append(card);
        });
    })

function createCountryCard(values) {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    ul.className = "country-info";

    values.forEach((value) => {
        const li = document.createElement("li");
        li.innerText = value;
        ul.append(li);
    });
    div.append(ul);
    return div;
}
