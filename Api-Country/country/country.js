//import { createCard } from './dom.helper.js';

const countriesBody = document.querySelector('.countries-box');

function createCard() {
  let newCard = document.createElement("div");
  newCard.className = "card";
  countriesBody.append(newCard);

  let star = document.createElement('i');
  star.className = 'star-icon fa fa-star';
  star.style.position = 'absolute';
  newCard.append(star);

  let cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  newCard.append(cardTitle);

  let hr = document.createElement("hr");
  hr.className = "line-card";
  newCard.append(hr);

  let items = document.createElement("div");
  items.className = "items";
  newCard.append(items);

  let titleBox = document.createElement("div");
  titleBox.className = "title-box item";
  items.append(titleBox);
  let titleList = document.createElement("div");
  titleList.className = "title-list text";
  titleBox.append(titleList);
  let titleListText = document.createTextNode("Native Name:");
  titleList.append(titleListText);
  let titleName = document.createElement("span");
  titleName.className = "title-name value";
  titleBox.append(titleName);

  let flagBox = document.createElement("div");
  flagBox.className = "flag-box item";
  items.append(flagBox);
  let flagList = document.createElement("div");
  flagList.className = "flag-list text";
  flagBox.append(flagList);
  let flagText = document.createTextNode("Flag:");
  flagList.append(flagText);
  let img = document.createElement("img");
  img.className = "flag value";
  flagBox.append(img);

  let capitalBox = document.createElement("div");
  capitalBox.className = "capital-box item";
  items.append(capitalBox);
  let capitalList = document.createElement("div");
  capitalList.className = "capital-list text";
  capitalBox.append(capitalList);
  let capitalListText = document.createTextNode("Capital:");
  capitalList.append(capitalListText);
  let capitalValue = document.createElement("span");
  capitalValue.className = "capital-value value";
  capitalBox.append(capitalValue);

  let regionBox = document.createElement("div");
  regionBox.className = "region-box item";
  items.append(regionBox);
  let regionList = document.createElement("div");
  regionList.className = "region-list text";
  regionBox.append(regionList);
  let regionListText = document.createTextNode("Region:");
  regionList.append(regionListText);
  let regionName = document.createElement("span");
  regionName.className = "region-name value";
  regionBox.append(regionName);

  let areaBox = document.createElement("div");
  areaBox.className = "area-box item";
  items.append(areaBox);
  let areaList = document.createElement("div");
  areaList.className = "area-list text";
  areaBox.append(areaList);
  let areaListText = document.createTextNode("Area:");
  areaList.append(areaListText);
  let areaText = document.createElement("span");
  areaText.className = "area-name value";
  areaBox.append(areaText);

  let populationBox = document.createElement("div");
  populationBox.className = "population-box item";
  items.append(populationBox);
  let populationList = document.createElement("div");
  populationList.className = "population-list text";
  populationBox.append(populationList);
  let populationListText = document.createTextNode("Population:");
  populationList.append(populationListText);
  let populationText = document.createElement("span");
  populationText.className = "population-count value";
  populationBox.append(populationText);
}
      
fetch("https://restcountries.eu/rest/v2/all")
  .then((r) => r.json())
  .then((r) => {
    for (let i = 0; i < r.length; i++) {
      createCard();
      document.querySelectorAll(".card-title")[i].innerText = r[i].name;
      document.querySelectorAll(".title-name")[i].innerText = r[i].nativeName;
      document.querySelectorAll(".flag")[i].src = r[i].flag;
      document.querySelectorAll(".capital-value")[i].innerText = r[i].capital;
      document.querySelectorAll(".region-name")[i].innerText = r[i].region;
      document.querySelectorAll(".area-name")[i].innerText = r[i].area;
      document.querySelectorAll(".population-count")[i].innerText = r[i].population;

      //console.log(countriesBody);
    }
    return countriesBody;
  });

const input = document.querySelector(".search-input");

input.addEventListener("keyup", click);

function click() {
  let filter, item, value;
  filter = input.value.toUpperCase();
  item = countriesBody.querySelectorAll(".card");

  item.forEach((element) => {
    let title = element.querySelector(".card-title");
    value = title.innerText;

    if (value.toUpperCase().indexOf(filter) > -1) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}



