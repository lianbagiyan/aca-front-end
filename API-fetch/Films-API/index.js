let card = document.querySelector(".card");
let content = document.querySelector(".content");

function createCard() {
  let newCard = document.createElement("div");
  newCard.className = "card";
  content.append(newCard);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  newCard.append(cardBody);

  let cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardBody.append(cardTitle);

  let hr = document.createElement("hr");
  hr.className = "line";
  cardBody.append(hr);

  let items = document.createElement("div");
  items.className = "items";
  cardBody.append(items);

  let titleBox = document.createElement("div");
  titleBox.className = "title-box item";
  items.append(titleBox);
  let titleList = document.createElement("div");
  titleList.className = "title-list text";
  titleBox.append(titleList);
  let titleListText = document.createTextNode("Title:");
  titleList.append(titleListText);
  let titleName = document.createElement("span");
  titleName.className = "title-name value";
  titleBox.append(titleName);

  let dateBox = document.createElement("div");
  dateBox.className = "r-date-box item";
  items.append(dateBox);
  let dateList = document.createElement("div");
  dateList.className = "date-list text";
  dateBox.append(dateList);
  let dateListText = document.createTextNode("Relese Date:");
  dateList.append(dateListText);
  let dateNumber = document.createElement("span");
  dateNumber.className = "date-number value";
  dateBox.append(dateNumber);

  let directorBox = document.createElement("div");
  directorBox.className = "director-box item";
  items.append(directorBox);
  let directorList = document.createElement("div");
  directorList.className = "director-list text";
  directorBox.append(directorList);
  let directorListText = document.createTextNode("Director:");
  directorList.append(directorListText);
  let directorName = document.createElement("span");
  directorName.className = "director-name value";
  directorBox.append(directorName);

  let descriptionBox = document.createElement("div");
  descriptionBox.className = "description-box item";
  items.append(descriptionBox);
  let descriptionList = document.createElement("div");
  descriptionList.className = "description-list text";
  descriptionBox.append(descriptionList);
  let descriptionListText = document.createTextNode("Description:");
  descriptionList.append(descriptionListText);
  let descriptionText = document.createElement("span");
  descriptionText.className = "description-text value";
  descriptionBox.append(descriptionText);
}

fetch("https://ghibliapi.herokuapp.com/films")
  .then((r) => r.json())
  .then((r) => {
    for (let i = 0; i < r.length; i++) {
      createCard();
      document.querySelectorAll(".card-title")[i].innerText = r[i].title;
      document.querySelectorAll(".title-name")[i].innerText = r[i].title;
      document.querySelectorAll(".date-number")[i].innerText = r[i].release_date;
      document.querySelectorAll(".director-name")[i].innerText = r[i].director;
      document.querySelectorAll(".description-text")[i].innerText = r[i].description;

      console.log(card);
    }
    return content;
});
