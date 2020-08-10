export function doGet() {
    let response;

    if(state.currentPage === 1) {
        response =  fetch`${baseUrl}${inputValue}`;
    } else {
        response =  fetch`${baseUrl}${inputValue}&page=${state.currentPage}`
    }

    response.json();
}