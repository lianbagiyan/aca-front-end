export async function doGet(value, currentPage) {
    console.log("value", value, "currentPage", currentPage);
    let response;
  
    if (currentPage === 1) {
      response = await fetch(`${baseUrl}${value}`);
    } else {
      response = await fetch(`${baseUrl}${value}&page=${currentPage}`);
    }
  
    let json = await response.json();
    return json;
  }

  const baseUrl = `http://openlibrary.org/search.json?q=`;