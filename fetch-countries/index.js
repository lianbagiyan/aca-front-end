// @TODO: add debounce on input

import { createCountryTableRow } from "./dom.helper.js";
import { doGet } from "./request.helper.js";
import { routes } from "./routes.helper.js";

const countryInput = document.querySelector("#country-input");
const table = document.querySelector(".country-table");
const tableBody = table.querySelector("tbody");

const state = {
  countryName: "",
};

countryInput.addEventListener("input", ({ target: { value } }) => {
  // const value = evt.target.value;
  if (value.trim() !== "") {
    state.countryName = value;
  }

  getCountries(state.countryName);
});

const renderCountry = ({ name, flag }) => {
  const row = createCountryTableRow({ name, imgSrc: flag });
  tableBody.append(row);
};

const getCountries = (name) => {
  const url =
    name === "" ? routes.getAllCountries() : routes.getCountryByName(name);

  tableBody.innerHTML = "Loading...";

  return doGet(url)
    .then((r) => {
      tableBody.innerHTML = "";

      return r;
    })
    .then((r) => {
      r.forEach(renderCountry);
    })
    .catch((err) => {
      tableBody.innerHTML = err.message;
    });
};

getCountries(state.countryName);