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
