// export function doGet(currentPage) {
//     let response;

//     const baseUrl = `http://openlibrary.org/search.json?q=`;

//     if(currentPage === 1) {
//         response =  fetch`${baseUrl}${inputValue}`;
//     } else {
//         response =  fetch`${baseUrl}${inputValue}&page=${currentPage}`
//     }

//     let json = response.json();
//     return json;
// }