import { BASE_URL } from "./constants.js";

export const routes = {
  getAllCountries() {
    return `${BASE_URL}/all`;
  },
  getCountryByName(name) {
    return `${BASE_URL}/name/${name}`;
  },
};